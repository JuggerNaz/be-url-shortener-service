const Sequelize = require('sequelize');

// var sequelize = new Sequelize('nintexTest', 'root', '', {
//     host: 'localhost', port: '3306',
//     dialect: 'mysql',
// });

var sequelize = new Sequelize('nintexTest', 'admin', 'testdb12345', {
    host: 'localhost', port: '3306',
    dialect: 'mysql',
});

module.exports = sequelize;
