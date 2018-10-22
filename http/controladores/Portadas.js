const db = require('../relaciones');
var FroalaEditor = require('wysiwyg-editor-node-sdk');
var { portada } = db;

var ex = module.exports = {};

ex.create = (req, res, next) => portada.create(req.body)
    .then(response => res.status(200).jsonp(response));

ex.delete = (req, res, next) => portada.findById(req.params.id)
    .then(portada => portada.destroy())
    .then(response => res.status(200).jsonp(response));

ex.update = (req, res, next) => portada.update(req.body, { where: { id: req.params.id } })
    .then(response => res.status(200).jsonp(response));

ex.read =  (req, res, next) => req.params.id ?
    portada.findById(req.params.id)
    .then(response => res.status(200).jsonp(response))
    :
    portada.findAll()
    .then(response => res.status(200).jsonp(response));
ex.froala = (req, res, next) => {

    var configs = {
        bucket: 'colnal-imagenes',
        region: 'us-east-1',
        keyStart: 'portadas/',
        acl: 'public-read',
        accessKey: 'AKIAJEYX66PCBH6V4VHQ',
        secretKey: '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',
    }

    var s3Hash = FroalaEditor.S3.getHash(configs);
    res.status(200).jsonp(s3Hash);
    console.log(s3Hash)
}

ex.obtenerTodasMiembros = (req, res, next) => portada.findAll({ where: { IdMiembro: req.params.idTipo } })
.then(response => res.status(200).jsonp(response));

ex.obtenerTodasNoticias = (req, res, next) => portada.findAll({ where: { IdNoticia: req.params.idTipo } })
.then(response => res.status(200).jsonp(response));

ex.obtenerTodasEventos = (req, res, next) => portada.findAll({ where: { IdEvento: req.params.idTipo } })
.then(response => res.status(200).jsonp(response));