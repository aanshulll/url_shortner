const jwt = require('jsonwebtoken');
const secret = 'Anshul@123';
function setUser(id, email) {
    return jwt.sign(
        {
            id: id,
            email: email,
        },
        secret
    );
}
function getUser(token) {
    if (!token) return null;
    return jwt.verify(token, secret);
}

module.exports = { setUser, getUser };
