const db = require('../relaciones');
var { categoria } = db;

var ex = module.exports = {};

ex.create = (req, res, next) => categoria.create(req.body)
    .then(response => res.status(200).jsonp(response))

ex.delete = (req, res, next) => categoria.findById(req.params.id)
    .then(categoria => categoria.destroy())
    .then(response => res.status(200).jsonp(response))

ex.update = (req, res, next) => categoria.update(req.body, { where: { id: req.params.id } } )
    .then(response => res.status(200).jsonp(response))

ex.read =  (req, res, next) => req.params.id ?
    categoria.findById(req.params.id)
    .then(response => res.status(200).jsonp(response))
    :
    categoria.findAll()
    .then(response => res.status(200).jsonp(response))
