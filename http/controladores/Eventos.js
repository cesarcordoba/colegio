const db = require('../relaciones');
const _ = require('lodash')
var { evento, categoria} = db;

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


ex.filtro = (req, res, next) => {

    console.log(req.body)
    ;(async function(){

        var buscar = (array, id) =>  array.filter(n => n.IdCategoria === id).map(n => [  n.id, buscar(array, n.id) ])

        var peticion = {
            where : [],
            include : []
        }
        
        if(_.isNumber(req.body.peticion.categorias)){

            await categoria.findAll()
            .then(response => {
                peticion.include.push(
                    {
                        model : categoria,
                        as : 'Categorias',
                        where : {
                            id :  {  $or : _.flattenDeep([req.body.peticion.categorias, buscar(response, req.body.peticion.categorias)])   }    
                        }
                })
            })

        }


        if(req.body.peticion.nombre.length > 0){
            peticion.where.push({nombre: {$like: '%' + req.body.peticion.nombre + '%'}})
        }
    
        await evento.findAndCountAll(peticion, {
            include : [
                { model : categoria,
                    as : 'Categorias'
                }
            ]
        })
        .then(response => res.status(200).jsonp(
            new Object({
                peticion: peticion,
                items: _.chunk(response.rows, req.body.limite)[req.body.pagina -1],
                paginas: Math.ceil(response.count / req.body.limite)
            })))


    })()
    
};