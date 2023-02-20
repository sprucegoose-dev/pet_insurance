'use strict';

const insuranceStatuses = [
    {
        type: 'fully_covered',
        label: 'Fully covered',
    },
    {
        type: 'accident_only',
        label: 'Accident only',
    },
    {
        type: 'no_cover',
        label: 'No cover',
    },
];

module.exports = {
    up: (queryInterface) => {
        return queryInterface.bulkInsert('insurance_statuses', insuranceStatuses);
    },
    down: (queryInterface) => {
        return queryInterface.bulkDelete('insurance_statuses', null, {});
    }
};
