const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
const session = require('express-session');

const mysql = require('mysql');
const myConnection = require('express-myconnection');

//INICIALIZAMOS EXPRESS
const app = express();
require('./database');

//CONFIGURACIONES
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials' ),
    extname: '.hbs',
    //ESTE HELPERS INICA LAS FUNCIONES QUE REALIZARA HANDLEBARS POR MEDIO DEL ARCHIVO /LIB/HANDLEBARS
    helpers: require('./lib/handlebars')
}));
app.set('view engine', '.hbs');

//MIDDLEWARE
app.use(morgan('dev'));


app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(session({
    secret: 'mysecretapp',
    resave:true,
    saveUninitialized: true
}));

//VARIABLES GLOBALES
app.use((req, res, next)=>{
    next();
});

//RUTAS
app.use(require('./routes'));
app.use(require('./routes/links'));
app.use(require('./routes/pedidos'));


//ARCHIVOS PUBLICOS
app.use(express.static(path.join(__dirname, 'public')));

//STARTIGN THE SERVER
app.listen(app.get('port'), ()=>{
    console.log('SERVER ON PORT' , app.get('port') );
});