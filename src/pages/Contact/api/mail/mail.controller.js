const router = require('express').Router();
const nodemailer = require('nodemailer');

const transport = {
  host: 'smtp.gmail.com',
  auth: {
    user: process.env.MAILUSER,
    pass: process.env.MAILPASS
  }
}

const transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/', (req, res, next) => {
  let name = req.body.name
  let email = req.body.email
  let message = req.body.message
  let phone = req.body.phone
  let category = req.body.category
  let content = `
category: ${category}\n
email: ${email} \n
phone: ${phone}\n
name: ${name} \n
message: \n${message}\n
  `

  let mail = {
    from: name,
    to: 'robotry.co.ltd@gmail.com',  //Change to email address that you want to receive messages on
    subject: '[문의] Robotry 홈페이지를 통한 문의 접수입니다',
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: 'fail'
      })
    } else {
      res.json({
        msg: 'success'
      })
    }
  })
});

module.exports = router;