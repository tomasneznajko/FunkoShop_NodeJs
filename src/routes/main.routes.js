var express = require('express');
const {home, about, faqs, contact, doContact} = require('../controllers/main.controller');
var router = express.Router();

/* GET home page. */
router.get('/home', home);

router.get('/about', about);

router.get('/faqs', faqs);

router.get('/contact', contact);

router.post('/contact', doContact);

module.exports = router;
