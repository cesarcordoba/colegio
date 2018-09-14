module.exports = ({Sequelize, sequelize } = conector) =>
    sequelize.define('portadas', {
        nombre: Sequelize.STRING
    },{
    	name : {
    		singular: 'portada',
    		plural: 'portadas'
        }
	})

