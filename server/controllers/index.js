const express = require("express");
const getCities = require('../database/queries/getCities');
const router = express.Router();

router.get('/cities',(req,res) => {
    getCities()
    .then((result) => {
      res.json(result.rows);
    })
    .catch((err) => console.log(err));
})
module.exports = router;
