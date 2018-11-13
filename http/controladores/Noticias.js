const db = require('../relaciones');
const _ = require('lodash')
var { noticia, tag } = db;

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

ex.obtenerSoloInstituciones = (req, res, next) => noticia.findAll({where: {tipo: "Institución"}})
.then(response => res.status(200).jsonp(response));

ex.obtenerSoloActualidades = (req, res, next) => noticia.findAll({where: {tipo: "Actualidad"}})
.then(response => res.status(200).jsonp(response));


ex.obtenerSoloPrensa = (req, res, next) => noticia.findAll({where: {tipo: "Prensa"}})
.then(response => res.status(200).jsonp(response));

ex.paginacion = function(req, res, next) {
    noticia.findAndCountAll({
        order:['nombre']}).then(result=> {
            const response = new Object({paginas:Math.ceil(result.count/req.params.items),
                        items: _.chunk(result.rows, req.params.items)[req.params.paginas-1]});
            res.status(200).jsonp(response);
        })
};

ex.filtro = (req, res, next) => {

    console.log(req.body)
    ;(async function(){

        var peticion = {
            where : []
        }

        if(req.body.peticion.nombre.length > 0){
            console.log("estoy en nombre")
            peticion.where.push({nombre: {$like: '%' + req.body.peticion.nombre + '%'}})
        }

        if(_.isNumber(req.body.peticion.tipo)){
            console.log("estoy en tipo")
            switch(req.body.peticion.tipo) { 
                case 1: { 
                    peticion.where.push({tipo: "Institución"})
                   break; 
                } 
                case 2: { 
                    peticion.where.push({tipo: "Actualidad"})
                   break; 
                }
                case 3: { 
                    peticion.where.push({tipo: "Prensa"})
                    break; 
                 }
             } 
        }

        await noticia.findAndCountAll(peticion)
        .then(response => res.status(200).jsonp(
            new Object({
                peticion: peticion,
                items: _.chunk(response.rows, req.body.limite)[req.body.pagina -1],
                paginas: Math.ceil(response.count / req.body.limite)
            })))


    })()
 
};
