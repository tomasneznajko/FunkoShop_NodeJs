const express = require('express');
const mainRoutes = require('./src/routes/main.routes')
const shopRoutes = require('./src/routes/shop.routes')
const adminRoutes = require('./src/routes/admin.routes')
const authRoutes = require('./src/routes/auth.routes')
const dotenv= require('dotenv');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session')


const app = express();
const port = 4000;
//para procesar datos enviados desde el formulario
app.use(express.urlencoded({ extended: true}))
app.use(express.json()) 
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieSession({
    name: 'session',
    keys: ['miClaveSecreta'],
    maxAge: 24 * 60 * 60 * 1000 // 24 horas (en milisegundos)
  }));

app.get('/', (req, res) => {
    res.send('Hola mundo! enviado desde ruta /');
})

app.use('/',mainRoutes)
app.use('/shop',shopRoutes)
app.use('/admin',adminRoutes)
app.use('/auth',authRoutes)






app.use(express.static('public'));

// Configuración del motor de vistas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/src/views'); // specify the views directory






//seteamos las variables de entorno
dotenv.config({path: __dirname + '/.env'}); 


app.listen(port, () => { console.log(`El servidor esta corriendo en el http://localhost:${port}`)})