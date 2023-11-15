import express from "express"

import { getUsers, userGetLogin, userGetRegister, userPostLogin, userPostRegister } from "../controllers/usercontrol.js"

const router = express.Router();

router.get('/', getUsers);

router.get('/register', userGetRegister);

router.post('/register', userPostRegister);

router.get('/login', userGetLogin);

router.post('/login', userPostLogin);



export default router;