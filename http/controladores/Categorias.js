const db = require('../relaciones');
var { categoria } = db;

var ex = module.exports = {};

ex.create = (req, res, next) => categoria.create(req.body)
    .then(response => res.status(200).jsonp(response));

ex.delete = (req, res, next) => categoria.findById(req.params.id)
    .then(categoria => categoria.destroy())
    .then(response => res.status(200).jsonp(response));

ex.update = (req, res, next) => categoria.update(req.body, { where: { id: req.params.id } })
    .then(response => res.status(200).jsonp(response));

ex.read =  (req, res, next) => req.params.id ?
    categoria.findById(req.params.id)
    .then(response => res.status(200).jsonp(response))
    :
    categoria.findAll()
    .then(response => res.status(200).jsonp(response));

ex.obtenerCategorias = (req, res, next) => categoria.findAll({ where: { IdCategoria: null } })
    .then(response => res.status(200).jsonp(response));

ex.obtenerSubCategorias = (req, res, next) => categoria.findAll({ where: { IdCategoria: req.params.idCategoria } })
    .then(response => res.status(200).jsonp(response));

ex.categoriasdeNoticias = (req, res, next) => {

    function detective(guia, hijo){
        let papa = guia.find(n => n.id === hijo.IdCategoria)
        return papa ? papa.nombre +  ' / ' + hijo.nombre : hijo.nombre
    }

    categoria.findAll()
    .then(response => response.map(n =>  Object.assign(n, { nombre : detective(response, n) })))
	.then(result => res.status(200).jsonp(result))

}

ex.categoriasdeMiembros = (req, res, next) => {

    function detective(guia, hijo){
        let papa = guia.find(n => n.id === hijo.IdCategoria)
        return papa ? papa.nombre +  ' / ' + hijo.nombre : hijo.nombre
    }

    function detectiveID(guia, hijo){
        let papa = guia.find(n => n.id === hijo.IdCategoria)
        return papa ? papa.id +  ' / ' + hijo.id : hijo.id
    }

    categoria.findAll()
    .then(response => response.map(n =>  Object.assign(n, { id: detectiveID(response, n), nombre: detective(response, n)})))
	.then(result => res.status(200).jsonp(result))

}
