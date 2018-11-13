const db = require('../relaciones');
const _ = require('lodash')
var { miembro, categoria} = db;

var ex = module.exports = {};

ex.create = (req, res, next) => miembro.create(req.body)
    .then(response => res.status(200).jsonp(response));

ex.delete = (req, res, next) => miembro.findById(req.params.id)
    .then(miembro => miembro.destroy())
    .then(response => res.status(200).jsonp(response));

ex.update = (req, res, next) => miembro.update(req.body, { where: { id: req.params.id } } )
    .then(response => res.status(200).jsonp(response));

ex.read =  (req, res, next) => req.params.id ?
    miembro.findById(req.params.id)
    .then(response => res.status(200).jsonp(response))
    :
    miembro.findAll()
    .then(response => res.status(200).jsonp(response));

ex.unirACategoria = (req, res, next) => miembro.findById(req.params.idMiembro)
    .then(miembro => miembro.addCategorias(req.params.idCategoria))
    .then(response => res.status(200).jsonp(response));

ex.obtenerCategorias = (req, res, next) => miembro.findById(req.params.idMiembro)
    .then(miembro => miembro.getCategorias({
        include: ['Categoria']}))
    .then(response => res.status(200).jsonp(response));

ex.removerDeCategoria = (req, res, next) => miembro.findById(req.params.idMiembro)
    .then(miembro => miembro.removeCategorias(req.params.idCategoria))
    .then(response => res.status(200).json(response));

ex.obtenerMiembrosFull = (req, res, next) => miembro.findAll({ include: ['Categorias'] })
    .then(response => res.status(200).jsonp(response));

ex.obtenerEventos = (req, res, next) => miembro.findById(req.params.idMiembro)
    .then(miembro => miembro.getEventos())
    .then(response => res.status(200).jsonp(response));

ex.paginacion = function(req, res, next) {
    miembro.findAndCountAll({
        order:['nombre']}).then(result=> {
            const response = new Object({paginas:Math.ceil(result.count/req.params.items),
                        items: _.chunk(result.rows, req.params.items)[req.params.paginas-1]});
            res.status(200).jsonp(response);
        })
};

ex.filtroXletra = function(req, res, next) {
    console.log(req.body)
    const guardar = [];
    miembro.findAll()
    .then(response => {
        response.forEach(n => {
            if(n.nombre.charAt(0) === req.body.letra){
                guardar.push(n)
            }
        })
        res.status(200).jsonp(guardar)
    })
   
};

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

        if(req.body.peticion.letras.length > 0){
            console.log("estoy en letras")
            peticion.where.push({ nombre: {$like: '%' + req.body.peticion.letras + '%'}
            })
        }

        if(req.body.peticion.nombre.length > 0){
            console.log("estoy en nombre")
            peticion.where.push({nombre: {$like: '%' + req.body.peticion.nombre + '%'}})
        }

        if(_.isNumber(req.body.peticion.fechas)){
            console.log("estoy en fechas")
            switch(req.body.peticion.fechas) { 
                case 1: { 
                    
                   break; 
                } 
                case 2: { 
                   peticion.where.push({activo: "activo"})
                   break; 
                }
                case 3: { 
                    peticion.where.push({activo: "inactivo"})
                    break; 
                 }
             } 
        }

        await miembro.findAndCountAll(peticion, {
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
