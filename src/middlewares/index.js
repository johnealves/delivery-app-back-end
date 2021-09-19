const errorMiddlewares = require('./errorMiddlewares');
const validRegister = require('./validRegister');
const validRegisterAdmin = require('./validRegisterAdmin');
const createToken = require('./createToken');
const validLogin = require('./validLogin');
const validJWT = require('./validJWT');
const validAddress = require('./validAddress');

module.exports = {
  validRegisterAdmin,
  errorMiddlewares,
  validRegister,
  validAddress,
  createToken,
  validLogin,
  validJWT,
};