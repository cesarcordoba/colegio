var express = require('express');
var app = express();
var path = require('path');
var favicon = require('serve-favicon')
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var session = require('express-session');
var passport = require('passport');
var flash = require('connect-flash');
var morgan = require('morgan');

var cons = require('consolidate');


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://lvh.me:4200");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

//- Rutas

var routes = require('./http/rutas');

var avatares = require('./http/rutas/Avatares');
var categorias = require('./http/rutas/Categorias');
var eventos = require('./http/rutas/Eventos');
var imagenes = require('./http/rutas/Imagenes');
var llaves = require('./http/rutas/Llaves');
var miembros = require('./http/rutas/Miembros');
var noticias = require('./http/rutas/Noticias');
var portadas = require('./http/rutas/Portadas');
var tags = require('./http/rutas/Tags');
var usuarios = require('./http/rutas/Usuarios');
// var imagenes = require('./http/routes/Imagen');
// var usuario = require('./http/routes/Usuario');
// var Auth = require('./http/rutas/Autentificacion')



// - Conexion a la base de datos

var con = require('./http/conexion');
//require('./conf/auth')(app);

// - Middlewares

var lessMiddleware = require('less-middleware')

app.engine('html', cons.swig)
app.set('views', path.join(__dirname, '/aplicacion/dist/'));
app.set("view engine", "html");

/* app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "jade"); */


app.use(favicon(path.join(__dirname, '/aplicacion/dist/', 'favicon.ico')))
/* app.use(favicon(path.join(__dirname, 'assets', 'favicon.ico'))) */
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(cookieParser());
app.use(flash());

app.use(session({secret: '01f4845/564564/6@@fas588--[[}++', resave: true, saveUninitialized: true}));

app.use(passport.initialize());
app.use(passport.session());

morgan('combined', {skip: function (req, res) { return res.statusCode < 400 }});

app.use('/', routes);
app.use('/', avatares);
app.use('/', categorias);
app.use('/', eventos);
app.use('/', imagenes);
app.use('/', llaves);
app.use('/', miembros);
app.use('/', noticias);
app.use('/', portadas);
app.use('/', tags);
app.use('/', usuarios);

// app.use('/', imagenes);
// app.use('/', usuario);
// app.use('/', Auth);


app.use(lessMiddleware(__dirname + '/aplicacion/dist/'));

app.use(express.static(path.join(__dirname, 'aplicacion/dist/')));

/* app.use(lessMiddleware(__dirname + '/assets'));
app.use(lessMiddleware(__dirname + '/assets/frags'));

app.use(express.static(path.join(__dirname, 'assets'))); */
app.use(express.static(path.join(__dirname, 'http')));

module.exports = app;
