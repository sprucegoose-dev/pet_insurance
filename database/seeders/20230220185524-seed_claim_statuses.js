'use strict';

const claimStatuses = [
    {
        type: 'pending',
        label: 'Pending',
    },
    {
        type: 'approved',
        label: 'Approved',
    },
    {
        type: 'rejected',
        label: 'Rejected',
    },
];

module.exports = {
    up: (queryInterface) => {
        return queryInterface.bulkInsert('claim_statuses', claimStatuses);
    },
    down: (queryInterface) => {
        return queryInterface.bulkDelete('claim_statuses', null, {});
    }
};
