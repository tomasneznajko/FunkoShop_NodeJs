var express = require('express');
const {admin, adminFilter, create, createItem, edit, editItem, deleteItem} = require('../controllers/admin.controller');
const uploadFiles = require('../middlewares/upload.files');


const Validator = require('../middlewares/validator');

const { query } = require('express-validator');


// const storage = multer.diskStorage({
//     destination: (req, file, cb) => cb(null, path.resolve(__dirname, '../../public/images/uploads')),
//     filename: (req, file, cb) => cb(null,`${Date.now()}-${file.originalname}`)
//  //   filename: (req, file, cb) => cb(null,Date.now() + '_' +  file.originalname)
// });

// const upload = multer({
//   storage  
// })

const isLogged = (req,res,next) => {
    if(req.session.isLogged !== undefined){
        return next();
    }
    return res.redirect('/auth/login')
}


var router = express.Router();

router.get('/',isLogged,admin)
router.post('/filter',adminFilter)

router.get('/create',isLogged, create);
router.post('/create',uploadFiles.fields([{name: "image-front"},{name: "image-back"}]),createItem);

router.get('/edit/:id',isLogged, edit);
router.put('/edit/:id', uploadFiles.fields([{name: "image-front"},{name: "image-back"}]),editItem);

router.delete('/delete/:id', deleteItem);

module.exports = router;
