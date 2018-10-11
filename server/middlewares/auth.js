require('dotenv').config()

const User = require('../models/users'),
  jwt = require('jsonwebtoken')

module.exports = {
  isLogin: function(req, res, next) {
    console.log('masuk middlewares/isLogin')
    let token = req.headers.access_token
    if (token) {
      jwt.verify(token, process.env.AccKey, function(err, decoded) {
        if (!err) {
          User.findOne({
            _id: decoded.id
          })
            .then(function(user) {
              console.log('this ish', user)
              req.user = user
              next()
            })
            .catch(function() {
              res.status(403).json({
                message: `access denied`
              })
            })
        } else {
          res.status(403).json({
            message: `access denied`
          })
        }
      })
    }
  }
}