const { validationResult } = require('express-validator');
const  Factory  = require('../auxilary.render/pagination.render');

// Middleware de validación

const validateLogin = (req, res, next) => {

  const errors = validationResult(req).errors; // Extraemos los errores


  console.log(errors)
  console.log(errors.length)
  if (errors.length !== 0) { 
    // Si hay errores, los devolvemos al cliente
    return res.render('auth/login',{
      title: 'Auth - Login',
      css: 'login',
      haveErrors: false,
      isLogged: req.session.isLogged,
      errors: errors,
      user: req.body
    });
  }
  next(); // Caso contrario continuamos al controlador
};


const validateCreate = (req, res, next) => {

  const errors = validationResult(req).errors; // Extraemos los errores


  console.log(errors)
  console.log(errors.length)

  if (errors.length !== 0) { 
    // Si hay errores, los devolvemos al cliente
    const obj = Factory.constructor(req.path.replace("/", ""),['haveErrors',true],['errors',errors],['item',req.body]);
    console.log(obj)
    return res.render('admin/create',obj);
  }
  next(); // Caso contrario continuamos al controlador
};


module.exports = {
  validateLogin,
  validateCreate
}