const shortID = require("shortid");
const newUrl = require("../models/event");


async function redirectToMainUrl(req, res) {
    let userShortID = req.params.id;
    let entry = await newUrl.findOneAndUpdate(
        { shortid: userShortID },
        {
            $push: {
                visits: {
                    timestamp: Date.now()
                }
            }
        },
        { new: true }
    );

    if (!entry) {
        return res.status(404).render("error", { errorMsg: "Short URL not found!" });
    }

    let redirectUrl = entry.redirectUrl;
    // ensure protocol
    if (!redirectUrl.startsWith("http://") && !redirectUrl.startsWith("https://")) {
        redirectUrl = "https://" + redirectUrl;
    }

    res.redirect(redirectUrl);
}


async function generateNewshortID(req, res) {

    let userURL = req.body;
    if (!userURL.url) {
        return res.status(400).json({
            error: "Url is required!"
        });
    }
    let shortUrlID = shortID.generate();
    let result = await newUrl.create(

        {
            shortid: shortUrlID,
            redirectUrl: userURL.url,
            visits: []

        }

    )
    console.log(result);


    return res.render("home", { id: shortUrlID });


}
async function showclicks(req, res) {

    let id = req.params.id;
    let history = await newUrl.findOne({ shortid: id })
    if (!history) {
        return res.status(404).json({ error: "Short URL not found" });
    }
    res.json(
        {
            totalClicks: history.visits.length,
            clickTime: history.visits

        }
    )


}
async function staticRouter(req, res) {
    let allurl = await newUrl.find({});
    res.render("home", { id: undefined, URLs: allurl }); // Pass both in one object
}

module.exports = {
    generateNewshortID,
    redirectToMainUrl,
    showclicks,
    staticRouter

}