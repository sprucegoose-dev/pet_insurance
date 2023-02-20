'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        const schema = {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            status:  {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
            },
        };

        return queryInterface.createTable('insurance_statuses', schema);
    },
    down: (queryInterface) => {
        return queryInterface.dropTable('insurance_statuses');
    }
};
