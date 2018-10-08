module.exports = ({Sequelize, sequelize } = conector) =>
    sequelize.define('eventos', {
        id:{ type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
        nombre: Sequelize.STRING,
        descripcion: Sequelize.TEXT,
        ubicacion: Sequelize.STRING,
        fecha: Sequelize.DATE,
        hora: Sequelize.STRING
    },{
    	name : {
    		singular: 'evento',
    		plural: 'eventos'
        }
	})
