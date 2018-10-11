const express = require('express'),
      router = express.Router(),
      { isLogin } = require('../middlewares/auth'),
      { list, create, search, update, remove } = require('../controllers/events');

/* GET home page. */
router
    .get('/', list)

    .post('/', isLogin, create)

    .post('/search/:keyword', isLogin, search)

    // .put('/:id', update)

    // .delete('/:id', remove)

module.exports = router;