const express = require('express'),
    router = express.Router(),
    { register, login } = require('../controllers/users');

/* GET users listing. */
router

    .post('/register', register)

    .post('/login', login)

module.exports = router;