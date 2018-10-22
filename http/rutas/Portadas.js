var route = require('express').Router();
var x = require('../controladores/Portadas');

route.route('/data/portada')
        .get(x.read)
        .post(x.create);

route.route('/data/portada/:id')
        .get(x.read)
        .put(x.update)
        .delete(x.delete);

route.route('/data/portadas/froala')
        .get(x.froala);

route.route('/data/portadas/obtenerTodasMiembros/:idTipo')
        .get(x.obtenerTodasMiembros);

route.route('/data/portadas/obtenerTodasNoticias/:idTipo')
        .get(x.obtenerTodasNoticias);

route.route('/data/portadas/obtenerTodasEventos/:idTipo')
        .get(x.obtenerTodasEventos);

module.exports = route;
