import express, {Express, Request, Response, NextFunction} from "express";
import {addUser, getUser, users} from "../controllers/user-controller";
import {PostUser} from "../models/user";
const router = express.Router();

/* GET users listing. */
router.get('/', function(req: Request, res: Response, next: NextFunction) {
  res.json(users)
});

/* GET users listing. */
router.post('/add', function(req: Request<{},{}, PostUser>, res: Response, next: NextFunction) {
  const userData = addUser(req.body);
  if(userData) res.json(userData);
  else next();
});
/* GET users listing. */
router.get('/:id', function(req: Request, res: Response, next: NextFunction) {
  const params = req.params;
  const userData = getUser(Number(params.id));
  res.json(userData)
});

export = router;
