newUrl = require("../models/event");
const AllUsers = require("../models/users");
const { setUser, getUser } = require("../util/auth");



async function CreateUser(req, res) {
    const { username, email, password } = req.body;

    const log = await AllUsers.create({ username, email, password });
    console.log(log);

    // ✅ Render or JSON, not both
res.render("login", { id: null, URLs: [] });

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
    let allurl = await newUrl.find({createdBy: user._id});
    console.log(user);
    
    if (user) {
       const token = setUser(user._id, user.email);
        res.cookie("sessionID", token, { httpOnly: true });
    res.redirect("/");

    } else {
        res.send("Invalid credentials");
    }
    
}
module.exports = {
    CreateUser,
    Redirect,
    login,
    VerifiyUser
};
