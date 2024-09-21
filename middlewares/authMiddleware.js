const jwt = require('jsonwebtoken');

// JWT Authentication Middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Get the token from the Authorization header

  if (token == null) {
    return res.status(401).json({ message: 'No token provided' }); // If there's no token, return 401 Unauthorized
  }

  jwt.verify(token, 'secretKey', (err, user) => { // Replace 'secretKey' with your own secret
    if (err) {
      return res.status(403).json({ message: 'Invalid token' }); // If token is invalid, return 403 Forbidden
    }

    req.user = user; // Store the user information in the request object
    next(); // Move on to the next middleware or route handler
  });
};

module.exports = authenticateToken;
