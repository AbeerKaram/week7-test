const Connection = require('../config/connection');

const addCity = (userData) => {
  const {
    name, city,
  } = userData;
  const sql = {
    text: 'INSERT INTO cities (name, city) VALUES ($1, $2);',
    values: [name,city],
  };
  return Connection.query(sql);
};

module.exports = addCity;