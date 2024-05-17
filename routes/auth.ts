import express, {Express, Request, Response, NextFunction} from "express";
import {PostAuth, ResponseAuth} from "../models/auth";
const router = express.Router();

/* GET users listing. */
router.post('/', function(req: Request<{}, {}, PostAuth>, res: Response<ResponseAuth>, next: NextFunction) {
    console.log(req.body.password)
    res.json({token: 'dddd'})
});

export = router;
