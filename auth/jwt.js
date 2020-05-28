const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || "e9rp^&^*&@9sejg)DSUA)jpfds8394jdsfn,m";

// create a token
function toJWT(data) { // to create unique token with some user data
  return jwt.sign(data, secret, { expiresIn: "2h" });
}

//checks tokens
function toData(token) {
  return jwt.verify(token, secret);
}

module.exports = { toJWT, toData };