
const newUrl = require("../models/event");



async function staticRouter(req, res) {
    if(!req.user) return res.redirect("/login")
    let allurl = await newUrl.find({createdBy: req.user._id});
    res.render("home", { id: undefined, URLs: allurl });
}




module.exports = {
  
    staticRouter

};
