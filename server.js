import express from 'express';
import userRouter from './router/user.js';
import ejs from 'ejs';
import bodyparser from "body-parser";
import { homepage } from './controllers/homecontrol.js';


const PORT = 7000;
const HOSTNAME = "localhost"
const app = express();

app.use(bodyparser.urlencoded({ extended: true }))

app.set('view engine', 'ejs');

app.set('views', 'views');

app.use('/user', userRouter);

app.get('/', homepage);

app.listen(PORT, HOSTNAME, () => {
    console.log(`Server is Working On http://${HOSTNAME}:${PORT}`);
})