const ItemModel = require('../models/item.model');

const getAllItems = async () => {
  return await ItemModel.getAll();
}

const getItem = async (id) => {
  return await ItemModel.getItem({product_id: id});
}

const getItemBy = async (filter) => {
  const array = Object.entries(filter)[0]
  return await ItemModel.getItemBy(array[0],array[1]);
}


const validateItem = async (item) => {
  return await ItemModel.validateItem({sku: item.sku});
}

const createItem = async (item) => {
  console.log(item)
  const itemSchema = {
    product_name: item.name,
    product_description: item.description,
    price: item.price,
    stock: item.stock,
    discount: item.discount,
    sku: item.sku,
    dues: item.dues,
    licence_id: item.licence,
    category_id: item.category,
    image_front: item.image_front,
    image_back: item.image_back

  }
  return await ItemModel.createItem([Object.values(itemSchema)]);
}

const withImages = (itemSchema, imagenes) => {
  if (Object.keys(imagenes).length > 0) {
    itemSchema.image_front = '/uploads/' + imagenes['image-front'][0].originalname;
    if (Object.keys(imagenes).length > 1) {
      itemSchema.image_back = '/uploads/' + imagenes['image-back'][0].originalname;
    }
  }
  return itemSchema;
};

const editItem = async (item, id, imagenes) => {
  console.log(imagenes)
  
  const itemSchema = {
    product_name: item.name,
    product_description: item.description,
    price: item.price,
    stock: item.stock,
    discount: item.discount,
    sku: item.sku,
    dues: item.dues,
    licence_id: item.licence,
    category_id: item.category
  } 
  const itemSchemaWithImages = withImages(itemSchema, imagenes); 

  return await ItemModel.editItem(itemSchemaWithImages, {product_id: id});
}


const deleteItem = async (id) => {
  return await ItemModel.deleteItem({product_id: id});
}

module.exports = {
  getAllItems,
  getItem,
  createItem,
  editItem,
  deleteItem,
  getItemBy,
  validateItem
}
