const db = require('../relaciones');
var { noticia, tag, categoria } = db;

var ex = module.exports = {};

ex.create = (req, res, next) => noticia.create(req.body)
    .then(response => res.status(200).jsonp(response));

ex.delete = (req, res, next) => noticia.findById(req.params.id)
    .then(noticia => noticia.destroy())
    .then(response => res.status(200).jsonp(response));

ex.update = (req, res, next) => noticia.update(req.body, { where: { id: req.params.id } } )
    .then(response => res.status(200).jsonp(response));

ex.read =  (req, res, next) => req.params.id ?
    noticia.findById(req.params.id)
    .then(response => res.status(200).jsonp(response))
    :
    noticia.findAll()
    .then(response => res.status(200).jsonp(response));

ex.ligarTag = (req, res, next) => noticia.findById(req.params.idNoticia)
    .then(noticia => noticia.addTags(req.params.idTag))
    .then(response => res.status(200).json(response));

ex.desligarTag = (req, res, next) => noticia.findById(req.params.idNoticia)
    .then(noticia => noticia.removeTags(req.params.idTag))
    .then(response => res.status(200).json(response));

ex.obtenerTagsNoticias = (req, res, next) => noticia.findById(req.params.idNoticia)
    .then(noticia => noticia.getTags())
    .then(response => res.status(200).json(response));

ex.obtenerTodoTags = (req, res, next) => tag.findAll()
    .then(response => res.status(200).jsonp(response));

ex.crearTag = (req, res, next) => tag.create(req.body)
    .then(response => res.status(200).jsonp(response));

ex.agregarCategoria = (req, res, next) => noticia.update(req.body, { where: { id: req.params.idNoticia } })
    .then(response => res.status(200).jsonp(response));

ex.eliminarCategoriaNoticia = (req, res, next) => noticia.update(req.body, { where: { id: req.params.idNoticia } })
    .then(response => res.status(200).jsonp(response));
