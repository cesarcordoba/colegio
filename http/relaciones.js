var conector = require('./conexion.js')
var noticia  = require('./modelos/Noticias')(conector);
var tag  = require('./modelos/Tags')(conector);
var portada  = require('./modelos/Portadas')(conector);
var imagen  = require('./modelos/Imagenes')(conector);
var usuario  = require('./modelos/Usuarios')(conector);
var miembro  = require('./modelos/Miembros')(conector);
var llave  = require('./modelos/Llaves')(conector);
var avatar  = require('./modelos/Avatares')(conector);
var categoria  = require('./modelos/Categorias')(conector);
var evento  = require('./modelos/Eventos')(conector);

// LLaves Sociales
usuario.hasOne(llave , {as: 'SocialKey', foreignKey: 'id_usuario'});
llave.belongsTo(usuario, {as: 'Usuario', foreignKey: 'id_usuario', onDelete: 'CASCADE'});

llave.hasOne(avatar, {as: 'Avatar', foreignKey: 'social_key'});
avatar.belongsTo(llave , {as: 'SocialKey', foreignKey: 'social_key', onDelete: 'CASCADE'});

noticia.belongsToMany(tag, {as: 'Tags', through: 'noticias-tags' , foreignKey: 'IdNoticia'})
tag.belongsToMany(noticia, {as: 'Noticias', through: 'noticias-tags' , foreignKey: 'IdTag'})

imagen.belongsTo(noticia, { as : 'Noticias', foreignKey:'IdNoticia', onDelete: 'CASCADE'});
noticia.hasMany(imagen, { as : 'Imagenes', foreignKey:'IdNoticia'});

portada.belongsTo(noticia, { as : 'Noticias', foreignKey:'IdNoticia'});
noticia.hasOne(portada, { as : 'Portada', foreignKey:'IdNoticia'});

noticia.belongsTo(categoria, { as : 'Categorias', foreignKey:'IdCategoria'});
categoria.hasMany(noticia, { as : 'Noticias', foreignKey:'IdCategoria'});

categoria.hasMany(categoria, { as : 'Subcategorias', foreignKey:'IdCategoria'});
categoria.belongsTo(categoria, { as : 'Categoria', foreignKey:'IdCategoria'});

categoria.belongsToMany(evento, { as: 'Eventos', through: 'categorias-eventos', foreignKey: 'IdCategoria' })
evento.belongsToMany(categoria, { as: 'Categorias', through: 'categorias-eventos', foreignKey: 'IdEvento' })

categoria.belongsToMany(miembro, {as: 'Miembros', through: 'categorias-miembros' , foreignKey: 'IdCategoria'})
miembro.belongsToMany(categoria, {as: 'Categorias', through: 'categorias-miembros' , foreignKey: 'IdMiembro'})

imagen.belongsTo(evento, { as : 'Eventos', foreignKey:'IdEvento', onDelete: 'CASCADE'});
evento.hasMany(imagen, { as : 'Imagenes', foreignKey:'IdEvento'});

portada.belongsTo(evento, { as : 'Eventos', foreignKey:'IdEvento'});
evento.hasOne(portada, { as : 'Portada', foreignKey:'IdEvento'});

portada.belongsTo(miembro, { as : 'Miembros', foreignKey:'IdMiembro'});
miembro.hasOne(portada, { as : 'Portada', foreignKey:'IdMiembro'});

evento.belongsToMany(miembro, {as: 'Miembros', through: 'eventos-miembros' , foreignKey: 'IdEvento'})
miembro.belongsToMany(evento, {as: 'Eventos', through: 'eventos-miembros' , foreignKey: 'IdMiembro'})


module.exports.noticia = noticia;
module.exports.tag = tag;
module.exports.portada = portada;
module.exports.imagen = imagen;
module.exports.usuario = usuario;
module.exports.miembro = miembro;
module.exports.llave = llave;
module.exports.avatar = avatar;
module.exports.categoria = categoria;
module.exports.evento = evento;
