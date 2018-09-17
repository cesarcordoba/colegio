module.exports = ({Sequelize, sequelize } = conector) =>
    sequelize.define('imagenes', {
        id:{ type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
        link: {
            type: Sequelize.STRING,
            allowNull: true
        }
    },{
    	name : {
    		singular: 'imagen',
    		plural: 'imagenes'
        }
	})
