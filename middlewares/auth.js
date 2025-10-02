const { get } = require("mongoose")
const { getUser } = require("../util/auth")


async function isAuthenticated(req, res, next) {
    const userid = req.cookies.sessionID;
    if (!userid) {
        return res.redirect("/sighup");
    }
    const user = getUser(userid);
    if (!user) {
        res.clearCookie("sessionID"); // 🔑 prevent infinite loop
        return res.redirect("/login");
    }
    req.user = user;
    next();
}


async function checkAuth(req, res, next) {
    const userid = req.cookies.sessionID

    const user = getUser(userid)
  

    req.user = user;

    next();

}

module.exports =
{
    isAuthenticated,
    checkAuth
}