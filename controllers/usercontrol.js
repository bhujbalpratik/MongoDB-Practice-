
import { User } from "../server.js"

export const getUsers = async (req, res) => {

    const user = await User.find({ name: "yash" });

    res.render("userhome", {
        title: "User Home Page",
        user,
    })
}

export const userGetRegister = (req, res) => {
    res.render("userRegister", {
        title: "Registration Page"
    })
}

export const userPostRegister = async (req, res) => {
    const { name, email, password } = req.body;
    await User.create({
        name, email, password
    })
    return res.redirect("/user/login");
}

export const userGetLogin = (req, res) => {
    res.render("userLogin", {
        title: "Login Page"
    })
}

export const userPostLogin = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    console.log(user);
    console.log(user.password);
    if (!user) return res.redirect("/user/register");

    const isPasswordMatch = user.password === password;

    if (!isPasswordMatch) return res.render("userLogin", { title: "loginPage", msg: "gandu password incorrect ahe na !" });
    return res.redirect("/");
}

