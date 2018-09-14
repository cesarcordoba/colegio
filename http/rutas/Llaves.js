var route = require('express').Router();
var x = require('../controladores/Llaves');

route.route('/data/llave')
        .get(x.read)
        .post(x.create);

route.route('/data/llave/:id')
        .get(x.read)
        .put(x.update)
        .delete(x.delete);

module.exports = route;

