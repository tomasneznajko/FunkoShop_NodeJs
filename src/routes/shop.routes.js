var express = require('express');
const {shop,shopFilter,item,addItem,cart,addToCart} = require('../controllers/shop.controller');
var router = express.Router();

router.get('/',shop)
router.post('/',shopFilter)

router.get('/item/:id', item);

router.post('/item/:id/add', addItem);

router.get('/cart', cart);

router.post('/cart', addToCart);

module.exports = router;
