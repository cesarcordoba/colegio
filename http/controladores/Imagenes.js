const db = require('../relaciones');
var FroalaEditor = require('wysiwyg-editor-node-sdk');
var { imagen } = db;

var ex = module.exports = {};

ex.create = (req, res, next) => imagen.create(req.body)
    .then(response => res.status(200).jsonp(response));

ex.delete = (req, res, next) => imagen.findById(req.params.id)
    .then(imagen => imagen.destroy())
    .then(response => res.status(200).jsonp(response));

ex.update = (req, res, next) => imagen.update(req.body, { where: { id: req.params.id } } )
    .then(response => res.status(200).jsonp(response));

ex.read =  (req, res, next) => req.params.id ?
    imagen.findById(req.params.id)
    .then(response => res.status(200).jsonp(response))
    :
    imagen.findAll()
    .then(response => res.status(200).jsonp(response));

ex.froala = (req, res, next) => {
    var configs = {
        bucket: 'colnal-imagenes',
        region: 'us-east-1',
        keyStart: 'imagenes/',
        acl: 'public-read',
        accessKey: 'AKIAJEYX66PCBH6V4VHQ',
        secretKey: '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',
    }
    var s3Hash = FroalaEditor.S3.getHash(configs);
    res.status(200).jsonp(s3Hash);
    console.log(s3Hash);
}
