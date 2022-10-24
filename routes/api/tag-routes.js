const router = require('express').Router();
const { Tag, Product } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // Find all tags and include associated product data
  Tag.findAll(
    {include: [Product]}
  )
  .then( (data) => {
    res.status(200).json(data);
  })
  .catch( (err) => {
    res.status(400).send(err.message)
  })
});

router.get('/:id', (req, res) => {
  // Find a single tag by its `id` and include its associated product data
  Tag.findOne({where: {id: req.params.id}},
    {include: [Product]})
  .then((data) => {
    res.status(200).json(data);
  })
  .catch( (err) => {
    res.status(400).send(err.message)
  })
});

router.post('/', (req, res) => {
  // Create a new tag
  Tag.create(req.body)
  .then((data) => {
    res.status(200).json(data);
  })
  .catch((err) => {
    res.status(400).send(err.message)
  });
});

router.put('/:id', (req, res) => {
  // Update a tag's name by its `id` value
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
  // Delete a tag by its `id` value
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
