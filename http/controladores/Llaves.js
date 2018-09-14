const db = require('../relaciones');
var { llave } = db;

var ex = module.exports = {};

ex.create = (req, res, next) => llave.create(req.body)
    .then(response => res.status(200).jsonp(response))

ex.delete = (req, res, next) => llave.findById(req.params.id)
    .then(llave => llave.destroy())
    .then(response => res.status(200).jsonp(response))

ex.update = (req, res, next) => llave.update(req.body, { where: { id: req.params.id } } )
    .then(response => res.status(200).jsonp(response))

ex.read =  (req, res, next) => req.params.id ?
    llave.findById(req.params.id)
    .then(response => res.status(200).jsonp(response))
    :
    llave.findAll()
    .then(response => res.status(200).jsonp(response))
