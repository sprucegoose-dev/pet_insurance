'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        const schema = {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            type:  {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
            },
        };

        return queryInterface.createTable('pet_types', schema);
    },
    down: (queryInterface) => {
        return queryInterface.dropTable('pet_types');
    }
};
