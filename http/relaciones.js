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
llave.belongsTo(usuario, {as: 'Usuario', foreignKey: 'id_usuario'});

llave.hasOne(avatar, {as: 'Avatar', foreignKey: 'social_key'});
avatar.belongsTo(llave , {as: 'SocialKey', foreignKey: 'social_key'});

noticia.belongsToMany(tags, {as: 'Tags', through: 'noticias-tags' , foreignKey: 'IdNoticia'})
tags.belongsToMany(noticia, {as: 'Noticias', through: 'noticias-tags' , foreignKey: 'IdTag'})


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
