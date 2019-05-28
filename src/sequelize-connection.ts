import { Sequelize } from 'sequelize-typescript';

const arr: any = {
    database: 'mytask',
    dialect: 'mysql',
    host: '127.0.0.1',
    username: 'root',
    password: '123456',
    modelPaths: [__dirname + '/model'],
    pool: {
        max: 200,
        min: 0,
        idle: 20000,
        acquire: 20000,
        evict: 5000,
        handleDisconnects: true,
    },
    retry: {
        match: [
            'Sequelize.ConnectionError',
            'Sequelize.ConnectionRefusedError',
            'Sequelize.ConnectionTimedOutError',
            'Sequelize.TimeoutError',
            '/Deadlock/i',
        ],
        max: 2,
    },
};

const sequelize = new Sequelize(arr);

export default sequelize;
