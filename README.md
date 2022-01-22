# URL Shortener Service

This is a backend code for URL Shortener Service (For Test).

# Guide

First Install and configure Serverless https://github.com/serverless/serverless#quick-start

Then install mongodb for node
```javascript
npm install sequilize --save 
```

MySQL Configuration
```javascript
var sequelize = new Sequelize('DB_NAME', 'root', 'root', {
    host: 'localhost', port: '3306',
    dialect: 'mysql',
});
```


# More information

Serverless - https://github.com/serverless/serverless

Sequelize Documentation - http://docs.sequelizejs.com/
