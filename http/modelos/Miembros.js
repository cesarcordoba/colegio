module.exports = ({Sequelize, sequelize } = conector) =>
    sequelize.define('miembros', {
        id:{ type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
        nombre: Sequelize.STRING,
        fecha: Sequelize.STRING,
        descripcion: Sequelize.TEXT,
        activo: Sequelize.STRING
    },{
    	name : {
    		singular: 'miembro',
    		plural: 'miembros'
        }
	})
