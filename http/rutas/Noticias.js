var route = require('express').Router();
var x = require('../controladores/Noticias');

route.route('/data/noticia')
        .get(x.read)
        .post(x.create);

route.route('/data/noticia/:id')
        .get(x.read)
        .put(x.update)
        .delete(x.delete);

route.route('/data/tag/union/:idTag/:idNoticia')
        .post(x.ligarTag)
        .delete(x.desligarTag);

route.route('/data/tag/obtenerTagsNoticias/:idNoticia')
        .get(x.obtenerTagsNoticias);

route.route('/data/tag/obtenerTodoTags')
        .get(x.obtenerTodoTags);

route.route('/data/tag/crearTag')
        .post(x.crearTag);

route.route('/data/categorias/agregarCategoria/:idNoticia')
        .put(x.agregarCategoria);

route.route('/data/categorias/eliminarCategoriaNoticia/:idNoticia')
        .put(x.eliminarCategoriaNoticia);
module.exports = route;
