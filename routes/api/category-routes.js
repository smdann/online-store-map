const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll()
  .then( (data) => {
    res.status(200).json(data);
  })
  .catch( (err) => {
    res.status(400).send(err.message)
  })
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findByPk(req.params.id)
  .then((data) => {
    res.status(200).json(data);
  })
  .catch( (err) => {
    res.status(400).send(err.message)
  })
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
  .then((data) => {
    res.status(200).json(data);
  })
  .catch((err) => {
    res.status(400).send(err.message)
  });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
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
  // delete a category by its `id` value
  Category.destroy({
    where: { id: req.params.id },
  })
  .then((deletedCategory) => {
    res.status(200).json(deletedCategory);
  })
  .catch((err) => {
    res.status(400).send(err.message)
  });
});

module.exports = router;
