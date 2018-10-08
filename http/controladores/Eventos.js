const db = require('../relaciones');
var { evento } = db;

var ex = module.exports = {};

ex.create = (req, res, next) => evento.create(req.body)
    .then(response => res.status(200).jsonp(response));

ex.delete = (req, res, next) => evento.findById(req.params.id)
    .then(evento => evento.destroy())
    .then(response => res.status(200).jsonp(response));

ex.update = (req, res, next) => evento.update(req.body, { where: { id: req.params.id } } )
    .then(response => res.status(200).jsonp(response));

ex.read =  (req, res, next) => req.params.id ?
    evento.findById(req.params.id)
    .then(response => res.status(200).jsonp(response))
    :
    evento.findAll()
    .then(response => res.status(200).jsonp(response));

ex.unirACategoria = (req, res, next) => evento.findById(req.params.idEvento)
    .then(evento => evento.addCategorias(req.params.idCategoria))
    .then(response => res.status(200).jsonp(response));

ex.obtenerCategorias = (req, res, next) => evento.findById(req.params.idEvento)
    .then(evento => evento.getCategorias())
    .then(response => res.status(200).jsonp(response));

ex.removerDeCategoria = (req, res, next) => evento.findById(req.params.idEvento)
    .then(evento => evento.removeCategorias(req.params.idCategoria))
    .then(response => res.status(200).json(response));

ex.unirAMiembro = (req, res, next) => evento.findById(req.params.idEvento)
    .then(evento => evento.addMiembros(req.params.idMiembro))
    .then(response => res.status(200).jsonp(response));

ex.obtenerMiembros = (req, res, next) => evento.findById(req.params.idEvento)
    .then(evento => evento.getMiembros())
    .then(response => res.status(200).jsonp(response));

ex.removerDeMiembro = (req, res, next) => evento.findById(req.params.idEvento)
    .then(evento => evento.removeMiembros(req.params.idMiembro))
    .then(response => res.status(200).json(response));
