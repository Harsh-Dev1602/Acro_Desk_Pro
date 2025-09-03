import express from 'express';
import { register , login , logout } from "../controller/user.controller.js";
import { hodlist } from '../controller/hodlist.controller.js';
const router = express.Router();
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/hodlist",hodlist);

export default router;