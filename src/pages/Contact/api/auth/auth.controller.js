const Joi = require('joi');
const Account = require('../../models/account');

// 로컬 회원가입
exports.localRegister = async (req, res) => {
  // 데이터 검증
  const schema = Joi.object().keys({
    username: Joi.string().alphanum().min(4).max(15).required(),
    id: Joi.string().required(),
    password: Joi.string().required().min(6)
  });

  const result = Joi.validate(req.body, schema);

  if (result.error) {
    res.sendStatus(400);
    res.send(result.error);
    return;
  }

  // 아이디 / 이메일 중복 체크
  let existing = null;
  try {
    existing = await Account.findByIdOrUsername(req.body);
  } catch (e) {
    res.sendStatus(500);
  }

  if(existing) {
  // 중복되는 아이디/이메일이 있을 경우
    res.sendStatus(409); // Conflict
    // 어떤 값이 중복되었는지 알려줍니다
    res.send({
      key: existing.id === req.body.id ? 'id' : 'username'
    });
    return;
  }

  // 계정 생성
  let account = null;
  try {
    account = await Account.localRegister(req.body);
  } catch (e) {
    res.sendStatus(500);
  }

  let token = null;
  try {
    token = await account.generateToken();
  } catch (e) {
    res.sendStatus(500);
  }

  res.cookie('access_token', token, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 2 });
  res.send(account.profile); // 프로필 정보로 응답합니다.
};

// 로컬 로그인
exports.login = async (req, res) => {
  const schema = Joi.object().keys({
    id: Joi.string().required(),
    password: Joi.string().required()
  });

  const result = Joi.validate(req.body, schema);

  if (result.error) {
    res.send(result.error);
    res.sendStatus(400); // Bad Request
    return;
  }

  const { id, password } = req.body;
  let account = await Account.findById(id);

  if (!account || !account.validatePassword(password) || account === null) {
  // 유저가 존재하지 않거나 || 비밀번호가 일치하지 않으면
    console.log(!account);
    res.sendStatus(403); // Forbidden
    return;
  }

  let token = null;
  try {
    token = await account.generateToken();
  } catch (e) {
    res.sendStatus(500);
  }

  res.cookie('access_token', token, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 2 });
  res.send(account.profile);
};

exports.exists = async (req, res) => {
  const { key, value } = req.params;
  let account = null;

  try {
    // key 에 따라 findByEmail 혹은 findByUsername 을 실행합니다.
    account = await (key === 'id' ? Account.findById(value) : Account.findByUsername(value));    
  } catch (e) {
    res.sendStatus(500);
  }

  res.send({
    exists: account !== null
  });
};

// 로그아웃
exports.logout = async (req, res) => {
  res.clearCookie('access_token', { httpOnly: true, maxAge: 0 });
  res.sendStatus(204);
};

exports.check = (req, res) => {
  const { user } = req;
  // console.log(user);

  if(!user) {
    res.sendStatus(403);
    return;
  }

  // res.send(user.profile);
  res.sendStatus(200);
};

// const jwt = require('jsonwebtoken')
// const User = require('../../../models/user')

// /*
//     POST /api/auth/register
//     {
//         username,
//         password
//     }
// */

// exports.register = (req, res) => {
//   const { username, password } = req.body
//   let newUser = null

//   // create a new user if does not exist
//   const create = (user) => {
//     if (user) {
//       throw new Error('username exists')
//     } else {
//       return User.create(username, password)
//     }
//   }

//   // count the number of the user
//   const count = (user) => {
//     newUser = user
//     return User.count({}).exec()
//   }

//   // assign admin if count is 1
//   const assign = (count) => {
//     if (count === 1) {
//       return newUser.assignAdmin()
//     } else {
//       // if not, return a promise that returns false
//       return Promise.resolve(false)
//     }
//   }

//   // respond to the client
//   const respond = (isAdmin) => {
//     res.json({
//       message: 'registered successfully',
//       admin: isAdmin ? true : false
//     })
//   }

//   // run when there is an error (username exists)
//   const onError = (error) => {
//     res.status(409).json({
//       message: error.message
//     })
//   }

//   // check username duplication
//   User.findOneByUsername(username)
//   .then(create)
//   .then(count)
//   .then(assign)
//   .then(respond)
//   .catch(onError)
// }

// /*
//     POST /api/auth/login
//     {
//         username,
//         password
//     }
// */

// exports.login = (req, res) => {
//   const {username, password} = req.body
//   const secret = req.app.get('jwt-secret')

//   console.log(username)
//   console.log(password)

//   // check the user info & generate the jwt
//       // check the user info & generate the jwt
//   const check = (user) => {
//     if (!user) {
//       // user does not exist
//       throw new Error('login failed')
//     } else {
//       // user exists, check the password
//       if (user.verify(password)) {
//           // create a promise that generates jwt asynchronously
//           const p = new Promise((resolve, reject) => {
//             jwt.sign(
//               {
//                 _id: user._id,
//                 username: user.username,
//                 admin: user.admin
//               }, 
//               secret, 
//               {
//                 expiresIn: '1d',
//                 issuer: 'robotry.co.kr',
//                 subject: 'userInfo'
//               }, (err, token) => {
//                 if (err) reject(err)
//                 resolve(token) 
//               })
//           })
//           return p
//       } else {
//         throw new Error('login failed')
//       }
//     }
//   }

//   // respond the token 
//   const respond = (token) => {
//     res.json({
//       message: 'logged in successfully',
//       token
//     })
//   }

//   // error occured
//   const onError = (error) => {
//     res.status(403).json({
//       message: error.message
//     })
//   }

//   // find the user
//   User.findOneByUsername(username)
//   .then(check)
//   .then(respond)
//   .catch(onError)
// }

// /*
//     GET /api/auth/check
// */

// exports.check = (req, res) => {
//   res.json({
//     success: true,
//     info: req.decoded
//   })
// }