const jwt = require('jsonwebtoken');


exports.cookie = (id) => {
    const token = jwt.sign(id, process.env.JWT_SECRET);
    return token;
}

exports.decodedUser = (token) => {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    return user;
}