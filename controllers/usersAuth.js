newUrl = require("../models/event");
const AllUsers = require("../models/users");
const  { v4 : uuidv4 } =  require("uuid");
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

    res.redirect("/login")
}
async function VerifiyUser(req,res) {
    const { email, password } = req.body;
    const user = await AllUsers.findOne({ email, password });
    // optional
    let allurl = await newUrl.find({createdBy: user._id});
    console.log(allurl);
    
    if (user) {
        const sessionID = uuidv4();
        setUser(sessionID, user);
        res.cookie("sessionID", sessionID, { httpOnly: true });
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
