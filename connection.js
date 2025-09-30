const mongoose = require("mongoose")
//password - w2UOUUkQhXCrq4FV
async function ConnectDB(url) {
    return mongoose.connect(url).then(() => { console.log("DB is connected");}).catch((err) => console.log("DB  error", err))
 
}


module.exports = 
{
    ConnectDB,
}