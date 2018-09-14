var route = require('express').Router();
var x = require('../controladores/Tags');

route.route('/data/tag')
        .get(x.read)
        .post(x.create);

route.route('/data/tag/:id')
        .get(x.read)
        .put(x.update)
        .delete(x.delete);

module.exports = route;

