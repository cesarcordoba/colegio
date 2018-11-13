var route = require('express').Router();
var x = require('../controladores/Miembros');

route.route('/data/miembro')
        .get(x.read)
        .post(x.create);

route.route('/data/miembro/:id')
        .get(x.read)
        .put(x.update)
        .delete(x.delete);

route.route('/data/unirMiembroxCategoria/:idMiembro/:idCategoria')
        .post(x.unirACategoria)
        .delete(x.removerDeCategoria);

route.route('/data/obtenerMiembroxCategoria/:idMiembro')
        .get(x.obtenerCategorias);

route.route('/data/obtenerMiembrosFull')
        .get(x.obtenerMiembrosFull);

route.route('/data/obtenerEventos/:idMiembro')
        .get(x.obtenerEventos);

route.route('/data/miembros/paginacion/:items/:paginas')
        .get(x.paginacion);

route.route('/data/miembros/filtroXletra')
        .post(x.filtroXletra);

route.route('/data/miembros/filtro')
        .put(x.filtro);
module.exports = route;
