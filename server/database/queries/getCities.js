const Connection = require('../config/connection');

const getCities= () => Connection.query('SELECT * FROM cities;');

module.exports = getCities;