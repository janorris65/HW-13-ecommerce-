const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll(
    {
    include: Product
  }
  ).then((productData) => {
    res.json(productData);
  });
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  const categoryData = await Category.findOne({where:{ id:req.params.id},
    include:Product});

  return res.json(categoryData);
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  const catDataDes = await Category.destroy({
    where: {
      id: req.params.id,
    },
  });

  return res.json(catDataDes);
});

module.exports = router;
