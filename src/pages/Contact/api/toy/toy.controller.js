const Joi = require('joi');
const { Types: { ObjectId } } = require('mongoose');
const Toy = require('../../models/toy');
const url = require('url');

exports.register = async (req, res) => {
  // 데이터 검증
  const schema = Joi.object().keys({
    active: Joi.boolean(),
    index: Joi.number().min(1).max(999).required(),
    name: Joi.string().min(1).max(100).required(),
    job: Joi.string().min(1).max(100).required(),
    descsum: Joi.string().min(1).max(100).required(),
    mechanism: Joi.string().min(1).max(100).required(),
    linktostore: Joi.any(),
    image1: Joi.any(),
    image2: Joi.any(),
    image3: Joi.any(),
    linktovideo: Joi.any(),
    toydesc: Joi.string().min(1).max(600),
  });

  const result = Joi.validate(req.body, schema);

  if (result.error) {
    console.log(result.error)
    res.send(result.error);
    res.sendStatus(400);
    return;
  }

  const { index } = req.body;
  let existing = null;
  try {
    existing = await Toy.findByIndex(index);
  } catch (e) {
    res.sendStatus(500);
  }

  if(existing) {
    res.sendStatus(409); // Conflict
    res.send({
      key: 'index'
    });
    return;
  }

  // 생성
  let toy = null;
  try {
    toy = await Toy.register(req.body);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }

  res.send(toy);
};

exports.exists = async (req, res) => {
  const { key, value } = req.params;
  let toy = null;

  try {
    // key 에 따라 findByEmail 혹은 findByUsername 을 실행합니다.
    toy = await (key === 'index' ? Toy.findByIndex(value) : null);
  } catch (e) {
    res.sendStatus(500);
  }

  res.send({
    exists: toy !== null
  });
};

exports.list = async (req, res) => {
  const { key, value } = req.params;
  let toys;

  try {
    toys = await Toy.find().sort({_id: -1}).exec();
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }

  res.send(toys)
};

exports.get = async (req, res) => {
  const { key, value } = req.params;
  let toy = null;

  try {
    toy = await (key === 'index' ? Toy.findByIndex(value) : null);
  } catch (e) {
    res.sendStatus(500);
  }

  if (!toy) {
    res.sendStatus(404)
    return;
  }

  res.send(toy);
};

exports.indexlist = async (req, res) => {
  let toys;

  try {
    toys = await Toy.find().sort({index: 1}).exec();
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }

  res.send(toys)
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const currentIndex = req.query.index;

  if (!ObjectId.isValid(id)) {
    res.sendStatus(400);
    return;
  }

  const { index } = req.body;

  let isCurrentIndex = currentIndex == index;
  let existing = null;

  try {
    existing = await Toy.findByIndex(index);
  } catch (e) {
    console.log(e)
    res.sendStatus(500);
  }

  if(!isCurrentIndex && existing) {
    res.sendStatus(409); // Conflict
    return;
  }

  let toy;

  try {
    // 아이디로 찾아서 업데이트를 합니다.
    // 파라미터는 (아이디, 변경 할 값, 설정) 순 입니다.
    toy = await Toy.findByIdAndUpdate(id, req.body, {
        // upsert 의 기본값은 false 입니다.
        new: true // 이 값을 넣어줘야 반환하는 값이 업데이트된 데이터입니다.
    });
  } catch (e) {
    console.log(e)
    res.sendStatus(500);
  }

  res.send(toy);
};

exports.delete = async (req, res) => {
  const { id } = req.params;

  try {
    await Toy.findByIdAndRemove(id).exec();
  } catch (e) {
    if(e.name === 'CastError') {
      res.sendStatus(400);
      return;
    }
  }

  res.sendStatus(204);
};