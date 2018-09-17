module.exports = ({Sequelize, sequelize } = conector) =>
    sequelize.define('tags', {
        id:{ type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
        nombre: Sequelize.STRING
    },{
    	name : {
    		singular: 'tag',
    		plural: 'tags'
        }
	})
