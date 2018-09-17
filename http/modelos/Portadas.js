module.exports = ({Sequelize, sequelize } = conector) =>
    sequelize.define('portadas', {
        id:{ type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
        link: {
            type: Sequelize.STRING,
            allowNull: true
        }
    },{
    	name : {
    		singular: 'portada',
    		plural: 'portadas'
        }
	})
