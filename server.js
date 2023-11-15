import express from 'express';
import userRouter from './router/user.js';
import ejs from 'ejs';
import bodyparser from "body-parser";
import { homepage } from './controllers/homecontrol.js';
import mongoose from 'mongoose';

mongoose.connect("mongodb://127.0.0.1:27017", {
    dbName: "MongoPractice"
}).then(() => console.log("Mongo Connected")).catch((err) => console.log(err));

const PORT = 7000;
const HOSTNAME = "localhost"
const app = express();

app.use(bodyparser.urlencoded({ extended: true }))

app.set('view engine', 'ejs');

app.set('views', 'views');

app.use('/user', userRouter);

app.get('/', homepage);

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },

}, { timestamps: true })

export const User = mongoose.model("User", UserSchema);









app.listen(PORT, HOSTNAME, () => {
    console.log(`Server is Working On http://${HOSTNAME}:${PORT}`);
})