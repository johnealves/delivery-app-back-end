const express = require('express');

const router = express.Router();

const ControllerAddress = require('../controllers/ControllerAddress')
const Middlewares = require('../middlewares');

router.post('/add/address', Middlewares.validAddress ,Middlewares.validJWT, ControllerAddress.addNewAddress);


module.exports = router;