const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

//PUERTO PARA HEROKU
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//EXPRESS HBS ENGINE
hbs.registerPartials(__dirname + '/views/parcials');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    
    res.render('home', {
        inHome: 'active',
        nombre: 'Lucas'
    });

});

app.get('/about', (req, res) => {
    res.render('about', {
        inAbout: 'active'
    });
});

// app.get('/data', (req, res) => {

//     res.send('Data is here');

// });


app.listen(port, () => {
    console.log(`Puerto: ${port}`);
});

