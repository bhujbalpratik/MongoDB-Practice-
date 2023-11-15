import express from "express"

import { userGetLogin, userGetRegister, userHome, userPostLogin, userPostRegister } from "../controllers/usercontrol.js"

const router = express.Router();

router.get('/', userHome);

router.get('/register', userGetRegister);

router.post('/register', userPostRegister);

router.get('/login', userGetLogin);

router.post('/login', userPostLogin);

export default router;