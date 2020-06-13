//Servidor en NodeJS

/*const http = require('http');

http.createServer((req,res)=> {
    res.end('Hello World');
}).listen(3000);*/


const express = require('express');
const morgan = require('morgan');
const app = express();

//requirimiento rutas
const routes = require('./routes');
const routesApi = require('./route-api');

//Settings
app.set('appName', 'Mi primer server');
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


//Middlewares
/*app.use(function(req,res,next){
    console.log('request url: ' + req.url)
    next();
}); */

app.use(morgan('dev'));


//RUtas
app.use(routes);
app.use('/api',routesApi);

app.get('*', (req,res)=>{
    res.end('Archivo no encontrado');
});


//Servidor
app.listen(3000, ()=> {
    console.log('Servidor Iniciado');
    console.log('Nombre de la app:', app.get('appName'));
});




