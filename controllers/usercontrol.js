export const userHome = (req, res) => {
    res.render("userhome", {
        title: "User Home Page"
    })
}

export const userGetRegister = (req, res) => {
    res.render("userRegister", {
        title: "Registration Page"
    })
}

export const userPostRegister = (req, res) => {
    const { name, email, password } = req.body;
    console.log(`User Name : ${name}`);
    console.log(`User Email : ${email}`);
    console.log(`User Password : ${password}`);
    return res.redirect("/user/login");
}

export const userGetLogin = (req, res) => {
    res.render("userLogin", {
        title: "Login Page"
    })
}

export const userPostLogin = (req, res) => {
    const { email, password } = req.body;
    console.log(`User Email : ${email}`);
    console.log(`User Password : ${password}`);
    return res.redirect("/user");
}

