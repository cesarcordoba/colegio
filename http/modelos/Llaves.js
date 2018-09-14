module.exports = ({Sequelize, sequelize } = conector) =>
    sequelize.define('llaves', {
        nombre: Sequelize.STRING
    },{
    	name : {
    		singular: 'llave',
    		plural: 'llaves'
        }
	})

