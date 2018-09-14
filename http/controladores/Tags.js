const db = require('../relaciones');
var { tag } = db;

var ex = module.exports = {};

ex.create = (req, res, next) => tag.create(req.body)
    .then(response => res.status(200).jsonp(response))

ex.delete = (req, res, next) => tag.findById(req.params.id)
    .then(tag => tag.destroy())
    .then(response => res.status(200).jsonp(response))

ex.update = (req, res, next) => tag.update(req.body, { where: { id: req.params.id } } )
    .then(response => res.status(200).jsonp(response))

ex.read =  (req, res, next) => req.params.id ?
    tag.findById(req.params.id)
    .then(response => res.status(200).jsonp(response))
    :
    tag.findAll()
    .then(response => res.status(200).jsonp(response))
