const uniqueRandomArray = require('unique-random-array');
const dcNames = require('./dc-names.json');

module.exports = {
    all: dcNames,
    random: uniqueRandomArray(dcNames)
};
