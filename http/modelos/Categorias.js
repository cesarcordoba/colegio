module.exports = ({Sequelize, sequelize } = conector) =>
    sequelize.define('categorias', {
        nombre: Sequelize.STRING
    },{
    	name : {
    		singular: 'categoria',
    		plural: 'categorias'
        }
	})

