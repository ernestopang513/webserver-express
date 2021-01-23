const express = require('express')
const app = express();
const hbs = require('hbs')

require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

app.get('/', (rep, res) => {
    res.render('home', {
        nombre: 'ErnEsto'
    })
})
app.get('/about', (rep, res) => {
    res.render('about')
})

// app.get('/', (req, res) => {
//     // res.send('Hello World, hola');
//     let salida = {
//         nombre: 'Ernesto',
//         edad: 23,
//         url: req.url
//     }
//     res.send(JSON.stringify(salida));
// });

// app.get('/data', (req, res) => {
//     res.send('Hola data')
// })

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});