const { get } = require("mongoose")
const { getUser } = require("../util/auth")


async function isAuthenticated(req, res, next) {
    const userid = req.cookies.sessionID
    if (!userid) {
        return res.redirect("/login")
    }
    const user = getUser(userid)
    if (!user) {
        return res.redirect("/login")

    }
    else {
        req.user = user;

    }
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