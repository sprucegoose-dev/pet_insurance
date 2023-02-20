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
            pet_id: {
                ...foreignKey,
                references: {
                    model: 'pets',
                    key: 'id',
                },
            },
            status_id: {
                ...foreignKey,
                references: {
                    model: 'claim_statuses',
                    key: 'id',
                },
            },
            description:  {
                type: Sequelize.STRING,
                allowNull: false,
            },
            cost:  {
                type: Sequelize.INTEGER,
            },
            created_at: Sequelize.DATE,
            updated_at: Sequelize.DATE,
        };

        return queryInterface.createTable('claims', schema);
    },
    down: (queryInterface) => {
        return queryInterface.dropTable('claims');
    }
};
