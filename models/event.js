const mongoose = require("mongoose");

const shorturl = new mongoose.Schema({
    shortid: {
        type: String,
        required: true,
    },
    redirectUrl: {
        type: String,
    },
    visits: [{
        timestamp: {
            type: Date,
            default: Date.now
        }
        
    }],
    createdBy:
    {
        type: mongoose.Schema.ObjectId,
        ref: "users"
    }
},
{
    timestamps: true
});

const ShortURL = mongoose.model("url", shorturl);

module.exports = ShortURL;