var route = require('express').Router();
var x = require('../controladores/Eventos');

route.route('/data/evento')
        .get(x.read)
        .post(x.create);

route.route('/data/evento/:id')
        .get(x.read)
        .put(x.update)
        .delete(x.delete);

route.route('/data/unirEventosxCategoria/:idEvento/:idCategoria')
        .post(x.unirACategoria)
        .delete(x.removerDeCategoria);

route.route('/data/obtenerEventosxCategoria/:idEvento')
        .get(x.obtenerCategorias);

route.route('/data/unirEventosxMiembros/:idEvento/:idMiembro')
        .post(x.unirAMiembro)
        .delete(x.removerDeMiembro);

route.route('/data/obtenerEventosxMiembros/:idEvento')
        .get(x.obtenerMiembros);

route.route('/data/eventos/filtro')
        .put(x.filtro);
module.exports = route;
