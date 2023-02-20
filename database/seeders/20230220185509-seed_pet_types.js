'use strict';

const petTypes = [
    {
        type: 'Cat',
    },
    {
        type: 'Dog',
    },
    {
        type: 'Lizard',
    },
    {
        type: 'Other',
    }
];

module.exports = {
    up: (queryInterface) => {
        return queryInterface.bulkInsert('pet_types', petTypes);
    },
    down: (queryInterface) => {
        return queryInterface.delete('pet_types', null, {});
    }
};
