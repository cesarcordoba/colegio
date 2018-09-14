var mysql = require('mysql');
var Sequelize = require('sequelize');


// var sequelize = new Sequelize('heroku_edc68d2cc793625', 'b5fa60b7f9c741', '54084b45', {
//     host: 'us-cdbr-iron-east-05.cleardb.net',
//     dialect: 'mysql',
//     port: '3306',
//     pool: {
//         max: 5,
//         min: 0,
//         idle: 10000
//     }
// });
//mysql://b90f59b79213d1:ee0cafe6@us-cdbr-iron-east-04.cleardb.net/heroku_10a170faf22acd3?reconnect=true
var sequelize = new Sequelize('heroku_10a170faf22acd3', 'b90f59b79213d1', 'ee0cafe6', {
    host: 'us-cdbr-iron-east-04.cleardb.net',
    dialect: 'mysql',
    port: '3306',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});
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

sequelize.sync()
.then(() =>  console.log('Connecion realizada'))
.catch(err =>  console.log('No se puede conectar a la bd:', err))

module.exports.Sequelize = Sequelize;
module.exports.sequelize = sequelize;
