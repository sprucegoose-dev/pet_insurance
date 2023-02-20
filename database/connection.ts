import { Sequelize } from 'sequelize';
import { IDatabaseEnvVars } from './database-types';

const {
    NODE_ENV,
    DB_NAME,
    DB_USER,
    DB_PASS,
    DB_HOST
} = process.env as unknown as IDatabaseEnvVars;

export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
    host: DB_HOST,
    dialect: 'mysql',
    logging: NODE_ENV === 'development' ? console.log : false,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    define: {
        charset: 'utf8',
        collate: 'utf8_general_ci',
    },
});
