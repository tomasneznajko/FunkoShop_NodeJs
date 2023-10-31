const express = require('express');

const app = express();
const port = 4000;

app.get('/', (req, res) => {
    res.send('Hola mundo! enviado desde ruta /');
})


app.get('/home', (req, res) => { 
    res.send ('Hola estoy en la page de home desdes server');
})

app.listen(port, () => { console.log(`El servidor esta corriendo en el http://localhost:${port}`)})