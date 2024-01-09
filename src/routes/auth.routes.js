var express = require('express');
const {register, doRegister, login, doLogin, logOut} = require('../controllers/auth.controller');

const Validator = require('../middlewares/validator');
const { body } = require('express-validator');

const loginValidations = [
    body('email')
        .isEmail().withMessage("No es una dirección de correo válida"), 
    body('password')
        .isLength({min:6}).withMessage("La contraseña debe tener al menos 6 caracteres alfanuméricos")
];
    

// const validatorEmail = query('email').custom(async value => {
//     const user = await UserCollection.findUserByEmail(value);
//     if (user) {
//       throw new Error('E-mail already in use');
//     }
//   })


var router = express.Router();

router.get('/register', register)

router.post('/register', doRegister)

router.get('/login', login);

router.post('/login', loginValidations,Validator.validateLogin, doLogin);

router.post('/logout', logOut);



module.exports = router;