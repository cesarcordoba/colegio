const db = require('../relaciones');
var { miembro } = db;

var ex = module.exports = {};

ex.create = (req, res, next) => miembro.create(req.body)
    .then(response => res.status(200).jsonp(response))

ex.delete = (req, res, next) => miembro.findById(req.params.id)
    .then(miembro => miembro.destroy())
    .then(response => res.status(200).jsonp(response))

ex.update = (req, res, next) => miembro.update(req.body, { where: { id: req.params.id } } )
    .then(response => res.status(200).jsonp(response))

ex.read =  (req, res, next) => req.params.id ?
    miembro.findById(req.params.id)
    .then(response => res.status(200).jsonp(response))
    :
    miembro.findAll()
    .then(response => res.status(200).jsonp(response))
