var mysql = require('mysql');
var Sequelize = require('sequelize');

//Para pruebas sin imagenes.

var sequelize = new Sequelize('heroku_2ce9363f4ad7be8', 'b1a7a44afc4463', '004d2ee3', {
    host: 'us-cdbr-iron-east-01.cleardb.net',
    dialect: 'mysql',
    port: '3306',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});
//mysql://b90f59b79213d1:ee0cafe6@us-cdbr-iron-east-04.cleardb.net/heroku_10a170faf22acd3?reconnect=true
// var sequelize = new Sequelize('colegio', 'root', '1234', {
//      host: '127.0.0.1',
//      dialect: 'mysql',
//      port: '3306',
//      operatorsAliases: true,
//      pool: {
//          max: 5,
//          min: 0,
//          idle: 200000,
//          acquire: 200000
//     }
//  })
// var sequelize = new Sequelize('heroku_10a170faf22acd3', 'b90f59b79213d1', 'ee0cafe6', {
//     host: 'us-cdbr-iron-east-04.cleardb.net',
//     dialect: 'mysql',
//     port: '3306',
//     pool: {
//         max: 5,
//         min: 0,
//         idle: 10000
//     }
// });
/* var sequelize = new Sequelize('icoaching', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql',
    port: '8889',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
}); */

// sequelize.sync()
// .then(() =>  console.log('Connecion realizada'))
// .catch(err =>  console.log('No se puede conectar a la bd:', err));

module.exports.Sequelize = Sequelize;
module.exports.sequelize = sequelize;
