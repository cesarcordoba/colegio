
app.service('Noticias', function() {

    this.crear = noticia => axios.post('/data/noticia', noticia)
    this.obtener = () => axios('/data/noticia')
    this.one = id => axios('/data/noticia/' + id)
    this.eliminar = id => axios.delete('/data/noticia/' + id)
    this.editar = noticia => axios.put('/data/noticia/' + noticia.id, noticia)

});

app.service('Tag', function() {

    this.crear = tag => axios.post('/data/tag', tag)
    this.obtener = () => axios('/data/tag')
    this.one = id => axios('/data/tag/' + id)
    this.eliminar = id => axios.delete('/data/tag/' + id)
    this.editar = tag => axios.put('/data/tag/' + tag.id, tag)

});

app.service('Portada', function() {

    this.crear = portada => axios.post('/data/portada', portada)
    this.obtener = () => axios('/data/portada')
    this.one = id => axios('/data/portada/' + id)
    this.eliminar = id => axios.delete('/data/portada/' + id)
    this.editar = portada => axios.put('/data/portada/' + portada.id, portada)

});

app.service('Imagen', function() {

    this.crear = imagen => axios.post('/data/imagen', imagen)
    this.obtener = () => axios('/data/imagen')
    this.one = id => axios('/data/imagen/' + id)
    this.eliminar = id => axios.delete('/data/imagen/' + id)
    this.editar = imagen => axios.put('/data/imagen/' + imagen.id, imagen)

});

app.service('Usuario', function() {

    this.crear = usuario => axios.post('/data/usuario', usuario)
    this.obtener = () => axios('/data/usuario')
    this.one = id => axios('/data/usuario/' + id)
    this.eliminar = id => axios.delete('/data/usuario/' + id)
    this.editar = usuario => axios.put('/data/usuario/' + usuario.id, usuario)

});

app.service('Miembro', function() {

    this.crear = miembro => axios.post('/data/miembro', miembro)
    this.obtener = () => axios('/data/miembro')
    this.one = id => axios('/data/miembro/' + id)
    this.eliminar = id => axios.delete('/data/miembro/' + id)
    this.editar = miembro => axios.put('/data/miembro/' + miembro.id, miembro)

});

app.service('Llave', function() {

    this.crear = llave => axios.post('/data/llave', llave)
    this.obtener = () => axios('/data/llave')
    this.one = id => axios('/data/llave/' + id)
    this.eliminar = id => axios.delete('/data/llave/' + id)
    this.editar = llave => axios.put('/data/llave/' + llave.id, llave)

});

app.service('Avatar', function() {

    this.crear = avatar => axios.post('/data/avatar', avatar)
    this.obtener = () => axios('/data/avatar')
    this.one = id => axios('/data/avatar/' + id)
    this.eliminar = id => axios.delete('/data/avatar/' + id)
    this.editar = avatar => axios.put('/data/avatar/' + avatar.id, avatar)

});

app.service('Categoria', function() {

    this.crear = categoria => axios.post('/data/categoria', categoria)
    this.obtener = () => axios('/data/categoria')
    this.one = id => axios('/data/categoria/' + id)
    this.eliminar = id => axios.delete('/data/categoria/' + id)
    this.editar = categoria => axios.put('/data/categoria/' + categoria.id, categoria)

});

app.service('Evento', function() {

    this.crear = evento => axios.post('/data/evento', evento)
    this.obtener = () => axios('/data/evento')
    this.one = id => axios('/data/evento/' + id)
    this.eliminar = id => axios.delete('/data/evento/' + id)
    this.editar = evento => axios.put('/data/evento/' + evento.id, evento)

});
