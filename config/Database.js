import sequelize from 'sequelize';

const db = new sequelize('api', 'root', '', {
    dialect: 'mysql',
    host: 'localhost'
});

export default db;