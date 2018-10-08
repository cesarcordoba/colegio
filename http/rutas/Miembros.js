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

module.exports = route;
