module.exports = ({Sequelize, sequelize } = conector) =>
    sequelize.define('usuarios', {
        nombre: Sequelize.STRING
    },{
    	name : {
    		singular: 'usuario',
    		plural: 'usuarios'
        }
	})

