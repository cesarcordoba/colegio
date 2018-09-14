const db = require('../relaciones');
var { usuario } = db;

var ex = module.exports = {};

ex.create = (req, res, next) => usuario.create(req.body)
    .then(response => res.status(200).jsonp(response))

ex.delete = (req, res, next) => usuario.findById(req.params.id)
    .then(usuario => usuario.destroy())
    .then(response => res.status(200).jsonp(response))

ex.update = (req, res, next) => usuario.update(req.body, { where: { id: req.params.id } } )
    .then(response => res.status(200).jsonp(response))

ex.read =  (req, res, next) => req.params.id ?
    usuario.findById(req.params.id)
    .then(response => res.status(200).jsonp(response))
    :
    usuario.findAll()
    .then(response => res.status(200).jsonp(response))
