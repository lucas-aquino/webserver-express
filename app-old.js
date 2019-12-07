const http      = require('http');
const express   = require('express');
const app       = express();



http.createServer((req, res) => {// De esta manera se crea un serivodr

    res.writeHead(200, { 'Content-Type': 'application/json' });

    let salida = {
        nombre: 'Lucas Aquino',
        edad: 21,
        url: req.url
    }

    res.write(JSON.stringify(salida));

    // res.write('Hola Mundo');

    res.end();
}).listen(8080);// de esta manera se le indica un puerto


console.log('Escuchado el puerto 8080');



