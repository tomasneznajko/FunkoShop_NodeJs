const path = require('path');
const { title } = require('process');

module.exports = {
    home: function(req, res, next){
        res.render('index',{
            title: 'Home',
            name: 'index',
            glide: 'Últimos lanzamientos',
            isLogged: req.session.isLogged
        })
      },
    about: function(req, res, next) {
        res.send('Algún día se hará about');
    },
    faqs: function(req, res, next) {
        res.send('Algún día se hará faqs');
    },
    contact: function(req, res, next) {
        res.render('extra/contact',{
            title: 'Contact',
            name: 'contact',
            isLogged: req.session.isLogged
        });
    },
    doContact: function(req, res, next) {
        res.redirect('/home')
    }
}

