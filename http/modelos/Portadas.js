module.exports = ({Sequelize, sequelize } = conector) =>
    sequelize.define('portadas', {
        id:{ type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
        key: Sequelize.STRING,
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
