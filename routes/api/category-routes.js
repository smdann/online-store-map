const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // Finds all categories and includes associated products
  Category.findAll(
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
  // Finds one category by its `id` value and includes its associated products
  Category.findOne({where: {id: req.params.id}},
    {include: [Product]})
  
  .then((data) => {
    res.status(200).json(data);
  })
  .catch( (err) => {
    res.status(400).send(err.message)
  })
});

router.post('/', (req, res) => {
  // Creates a new category
  Category.create(req.body)
  .then((data) => {
    res.status(200).json(data);
  })
  .catch((err) => {
    res.status(400).send(err.message)
  });
});

router.put('/:id', (req, res) => {
  // Updates a category by its `id` value
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
  // Deletes a category by its `id` value
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
