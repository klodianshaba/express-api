"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
/* GET users listing. */
router.post('/auth', function (req, res, next) {
    console.log(req.body.password);
    res.json({ token: 'dddd' });
});
module.exports = router;
// module.exports = router;
