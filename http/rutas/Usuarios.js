var route = require('express').Router();
var x = require('../controladores/Usuarios');

route.route('/data/usuario')
        .get(x.read)
        .post(x.create);

route.route('/data/usuario/:id')
        .get(x.read)
        .put(x.update)
        .delete(x.delete);

module.exports = route;

