const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = (request, response, next) => {
    //Get token from header
    const token = request.header('x-auth-token');

    // Check if not token
    if (!token) {
        return response
            .status(401)
            .json({ message: 'No Token, Autorization failed...' });
    }

    try {
        const decoded = jwt.verify(token, config.get('jwtSecret'));

        request.user = decoded.user;
        next();
    } catch (error) {
        return response.status(401).json({ message: 'Token is invalid!!!' });
    }
};
