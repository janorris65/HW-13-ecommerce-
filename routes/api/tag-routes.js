const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  Tag.findAll({
    include:Product
  }
    
    ).then((productData) => {
      res.json(productData);
    });
  // be sure to include its associated Product data
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  const tagData = await Tag.findOne({where:{ id:req.params.id},
    include:Product});

  return res.json(tagData);
  // be sure to include its associated Product data
});

router.post('/', async (req, res) => {
  // create a new tag
  const tagDataCreate = await Tag.create(req.body);

  return res.json(tagDataCreate);
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  const tagDataUpdate = await Tag.update(
    {
      tag_name: req.body.tag_name
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );

  return res.json(tagDataUpdate);
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  const tagDataDes = await Tag.destroy({
    where: {
      id: req.params.id,
    },
  });

  return res.json(tagDataDes);
});

module.exports = router;
