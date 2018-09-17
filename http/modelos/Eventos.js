module.exports = ({Sequelize, sequelize } = conector) =>
    sequelize.define('eventos', {
        id:{ type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
        titulo: Sequelize.STRING,
        descripcion: Sequelize.TEXT,
        ubicacion: Sequelize.STRING,
        fecha: Sequelize.DATE
    },{
    	name : {
    		singular: 'evento',
    		plural: 'eventos'
        }
	})
