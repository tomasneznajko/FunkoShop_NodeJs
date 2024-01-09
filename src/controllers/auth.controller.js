const UserService = require('../services/user.service');

const constructorLogin = (...attributes) => {
    return attributes.reduce((obj, [clave, valor]) => {
      obj[clave] = valor;
      return obj;
    }, {
        title: 'Auth - Login',
        name: 'login',
    });
};


module.exports = {
    register: async (req, res) =>{
        res.render('auth/register',{
            title: 'Auth - Register',
            name: 'register',
            isLogged: req.session.isLogged
        });
      },
    doRegister: async (req, res) =>{
        console.log(req)
        console.log(req.body)
        let user = req.body;
        console.log(user)
        UserService.createUser(user);
        
        res.redirect('/auth/login');
    },
    login: async (req, res) => {
        res.render('auth/login',{
            title: 'Auth - Login',
            name: 'login',
            haveErrors: false,
            isLogged: req.session.isLogged
        });
    },
    doLogin: async (req, res) => {

        // const errors = validationResult(req.body);

        // console.log(errors)
    
        // if (!errors.isEmpty()) {
        //     // Si hay errores de validación, renderiza la página nuevamente con los errores
        //     return res.render('login', { errors: errors.array() });
        // }

        const user = req.body;

        const credentials = await UserService.credentials(user);

        console.log(credentials.data.length)

        req.session.isLogged = credentials.data.length === 1

        console.log(user);

        if(req.session.isLogged){
            res.locals.isLogged = true;
            res.redirect('/admin')
        }
        else{
            res.redirect('/auth/login')
        }


    },
    logOut: async (req, res) => {
        req.session.isLogged = undefined;
        res.locals.isLogged = false;
        res.redirect('/home')
    },
    constructorLogin
}


