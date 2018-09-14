var route = require('express').Router();
var x = require('../controladores/Categorias');

route.route('/data/categoria')
        .get(x.read)
        .post(x.create);

route.route('/data/categoria/:id')
        .get(x.read)
        .put(x.update)
        .delete(x.delete);

module.exports = route;

