var fs = require("fs");

var modelos = [
    {   servicio : 'Noticias', nombre : 'Noticias',    singular : 'noticia',      plural : 'noticias'},
    {   servicio : 'Tag', nombre : 'Tags',    singular : 'tag',      plural : 'tags'},
    {   servicio : 'Portada', nombre : 'Portadas',    singular : 'portada',      plural : 'portadas'},
    {   servicio : 'Imagen', nombre : 'Imagenes',    singular : 'imagen',      plural : 'imagenes'},
    {   servicio : 'Usuario', nombre : 'Usuarios',    singular : 'usuario',      plural : 'usuarios'},
    {   servicio : 'Miembro', nombre : 'Miembros',    singular : 'miembro',      plural : 'miembros'},
    {   servicio : 'Llave', nombre : 'Llaves',    singular : 'llave',      plural : 'llaves'},
    {   servicio : 'Avatar', nombre : 'Avatares',    singular : 'avatar',      plural : 'avatares'},
    {   servicio : 'Categoria', nombre : 'Categorias',    singular : 'categoria',      plural : 'categorias'},
    {   servicio : 'Evento', nombre : 'Eventos',    singular : 'evento',      plural : 'eventos'}
]


var relaciones = fs.createWriteStream("servicios.js")

modelos.forEach(modelo =>
relaciones.write(
`
app.service('` + modelo.servicio +  `', function() {

    this.crear = ` + modelo.singular +  ` => axios.post('/data/` + modelo.singular +  `', ` + modelo.singular +  `)
    this.obtener = () => axios('/data/` + modelo.singular +  `')
    this.one = id => axios('/data/` + modelo.singular +  `/' + id)
    this.eliminar = id => axios.delete('/data/` + modelo.singular +  `/' + id)
    this.editar = ` + modelo.singular +  ` => axios.put('/data/` + modelo.singular +  `/' + ` + modelo.singular +  `.id, ` + modelo.singular +  `)

});
`)
)

relaciones.end()
