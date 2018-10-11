const express = require('express'),
     cors = require('cors'),
     mongoose = require('mongoose'),
     jwt = require('jsonwebtoken'),
     bodyParser= require('body-parser');

const usersRouter = require('./routes/users'),
     eventsRouter = require('./routes/events'),
     app = express();

mongoose.connect('mongodb://localhost:27017/wonder-livecode1');

app
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())
  .use(cors());

app
  .use('/users', usersRouter)
  .use('/events', eventsRouter)

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
})