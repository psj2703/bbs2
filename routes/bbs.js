var express = require('express');
var router = express.Router();
const { bbs } = require('../models');

/* GET bbs listing. */
router.get('/', async function(req, res, next) {
  const list = await bbs.findAll({});
  console.log(JSON.stringify(list));
  res.send(list);
});

router.get('/:id', async function(req, res, next) {
    const result = await bbs.findAll({ where: { id: req.params.id }})
    res.send(result);
})

router.post('/', async function(req, res, next) {
    const result = await bbs.create(req.body);
    res.send(result);
});

router.put('/:id', async function(req, res, next) {
    const result = await bbs.update(req.body, {
        where: {
          id: req.params.id
        }
      });
    res.send(result);
})

router.put('/:id', async function(req, res, next) {
    const result = await bbs.destroy({
        where: {
          firstName: req.params.id
        }
      });
    res.send(result);
})

module.exports = router;
