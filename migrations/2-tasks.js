'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('tasks', {

            task_id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.BIGINT,
            },
            user_id: {
                type: Sequelize.BIGINT,
                allowNull: false,
                references: {
                  model: "users",
                  key: "user_id"
                }
            },
            name: {
                type: Sequelize.STRING,
                defaultValue: null,
                allowNull: true,
            },
            schedule_date: {
                type: Sequelize.DATE,
                defaultValue: null,
                allowNull: true,
            },
            isCompleted: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            details: {
                type: Sequelize.TEXT,
                allowNull:true
            },
            createdAt: {
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
                type: Sequelize.DATE,
                allowNull: false,
            },
            updatedAt: {
                type: Sequelize.DATE(3),
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3)'),
                allowNull: false,
            },
            deletedAt: {
                type: Sequelize.DATE,
                allowNull: true,
            },
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('tasks');
    }
};
