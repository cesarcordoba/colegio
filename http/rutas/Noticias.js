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

route.route('/data/obtenerSoloInstituciones')
        .get(x.obtenerSoloInstituciones);

route.route('/data/obtenerSoloActualidades')
        .get(x.obtenerSoloActualidades);

route.route('/data/obtenerSoloPrensa')
        .get(x.obtenerSoloPrensa);

route.route('/data/noticias/paginacion/:items/:paginas')
        .get(x.paginacion);

route.route('/data/noticias/filtro')
        .put(x.filtro);
module.exports = route;
