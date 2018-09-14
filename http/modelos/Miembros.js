module.exports = ({Sequelize, sequelize } = conector) =>
    sequelize.define('miembros', {
        nombre: Sequelize.STRING
    },{
    	name : {
    		singular: 'miembro',
    		plural: 'miembros'
        }
	})

