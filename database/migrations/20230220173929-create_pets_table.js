'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        const foreignKey = {
            type: Sequelize.INTEGER,
            onUpdate: 'cascade',
            onDelete: 'cascade',
            allowNull: false,
        };

        const schema = {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name:  {
                type: Sequelize.STRING,
                allowNull: false,
            },
            age:  {
                type: Sequelize.STRING,
                allowNull: false,
            },
            type_id: {
                ...foreignKey,
                references: {
                    model: 'pet_types',
                    key: 'id',
                },
            },
            insurance_status_id: {
                ...foreignKey,
                references: {
                    model: 'insurance_statuses',
                    key: 'id',
                },
            },
            owner_id: {
                ...foreignKey,
                references: {
                    model: 'users',
                    key: 'id',
                },
            },
            created_at: Sequelize.DATE,
            updated_at: Sequelize.DATE,
        };

        return queryInterface.createTable('pets', schema);
    },
    down: (queryInterface) => {
        return queryInterface.dropTable('pets');
    }
};
