module.exports = ({Sequelize, sequelize } = conector) =>
    sequelize.define('llaves', {
        fb_id: Sequelize.STRING,
        tw_id: Sequelize.DECIMAL,
        gl_id: Sequelize.STRING,
        inst_id: Sequelize.DECIMAL,
        password: Sequelize.STRING
    },{
    	name : {
    		singular: 'llave',
    		plural: 'llaves'
        }
	})

