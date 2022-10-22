const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll()
  .then( (data) => {
    res.status(200).json(data);
  })
  .catch( (err) => {
    res.status(400).send(err.message)
  })
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findByPk(req.params.id)
  .then((data) => {
    res.status(200).json(data);
  })
  .catch( (err) => {
    res.status(400).send(err.message)
  })
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body)
  .then((data) => {
    res.status(200).json(data);
  })
  .catch((err) => {
    res.status(400).send(err.message)
  });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(
    req.body,
    { where: { id: req.params.id } }
  )
  .then((updatedData) => {
    res.status(200).json(updatedData);
  })
  .catch( (err) => {
    res.status(400).send(err.message)
  })
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: { id: req.params.id },
  })
  .then((deletedTag) => {
    res.status(200).json(deletedTag);
  })
  .catch((err) => {
    res.status(400).send(err.message)
  });
});

module.exports = router;
