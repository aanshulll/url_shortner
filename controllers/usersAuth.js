newUrl = require("../models/event");
const AllUsers = require("../models/users");
const { setUser, getUser } = require("../util/auth");



async function CreateUser(req, res) {
    try {
        const { username, email, password } = req.body;

        const log = await AllUsers.create({ username, email, password });
        console.log(log);

        res.render("login", { id: null, URLs: [] });
    } catch (err) {
        if (err.code === 11000) {
            // Duplicate key error
            res.render("error", { errorMsg: "Email already exists. Please try another one." });
        } else {
            res.render("error", { errorMsg: "Something went wrong. Please try again." });
        }
    }
}


async function Redirect(req, res) {
    res.render("signUp"); // fixed typo
}
async function login(req,res) {

    res.render("login", { id: null, URLs: [] })
}
async function VerifiyUser(req,res) {
    const { email, password } = req.body;
    const user = await AllUsers.findOne({ email, password });
    // optional
    console.log(user);
    
    if (user) {
       const token = setUser(user._id, user.email);
        res.cookie("sessionID", token, { httpOnly: true });
    res.redirect("/");

    } else {
        res.render("error", { errorMsg: "Invalid credentials" });

    }
    
}
module.exports = {
    CreateUser,
    Redirect,
    login,
    VerifiyUser
};
