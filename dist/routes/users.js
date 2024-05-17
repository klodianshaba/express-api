"use strict";
var express = require('express');
var router = express.Router();
/* GET users listing. */
router.get('/', function (req, res, next) {
    var response = [{ id: 1, name: 'klodian shaba d' }];
    res.json(response);
});
/* GET users listing. */
router.post('/add', function (req, res, next) {
    var payload = req.body;
    console.log(payload);
    console.log(payload.name);
    res.json({});
});
/* GET users listing. */
router.get('/:id', function (req, res, next) {
    var payload = req.body;
    console.log(payload);
    console.log(payload.name);
    res.json({});
});
module.exports = router;
