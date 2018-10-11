require('dotenv').config();

let hashPass = require('../helpers/hashPass');

const jwt = require('jsonwebtoken'),
  User = require('../models/users');

module.exports = {

    register: (req, res) => {
      User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      })
      .then(user => {
        res.status(201).json({
          success: true,
          message: `Account ${req.body.name} registered`
        })
      })
      .catch(err => {
        res.status(500).json({
          message: err.message
        })
      })
  },

  login: function (req, res) {
    console.log('masuk controllers/users -> login')
    User.findOne({
      email: req.body.email,
      password: hashPass(req.body.password)
    })
      .then(user => {
        jwt.sign({
          id: user._id
        }, process.env.AccKey,
          function (err, token) {
            res.status(201).json({
              token: token
            })
          }
        )
      })
      .catch(function () {
        res.status(500).json({
          message: `email and password didn't match`
        })
      })
  }
}