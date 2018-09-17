module.exports = ({Sequelize, sequelize } = conector) =>
    sequelize.define('noticias', {
        id:{ type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
        nombre: Sequelize.STRING,
        introduccion: Sequelize.TEXT,
        descripcion: Sequelize.TEXT,
    },{
    	name : {
    		singular: 'noticia',
    		plural: 'noticias'
        }
	})
