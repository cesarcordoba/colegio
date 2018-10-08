var route = require('express').Router();
var x = require('../controladores/Categorias');

route.route('/data/categoria')
        .get(x.read)
        .post(x.create);

route.route('/data/categoria/:id')
        .get(x.read)
        .put(x.update)
        .delete(x.delete);

route.route('/data/obtenerCategorias')
        .get(x.obtenerCategorias);

route.route('/data/obtenerSubCategorias/:idCategoria')
        .get(x.obtenerSubCategorias);

route.route('/data/categorias/categoriasdeNoticias')
        .get(x.categoriasdeNoticias);

route.route('/data/categorias/categoriasdeMiembros')
        .get(x.categoriasdeMiembros);
module.exports = route;
