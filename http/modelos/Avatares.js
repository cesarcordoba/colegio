module.exports = ({Sequelize, sequelize } = conector) =>
    sequelize.define('avatares', {
        nombre: Sequelize.STRING
    },{
    	name : {
    		singular: 'avatar',
    		plural: 'avatares'
        }
	})

