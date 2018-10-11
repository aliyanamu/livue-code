const Evento = require('../models/events')

module.exports = {
  create: (req, res) => {
    console.log('masuk controllers/events -> create', req.user)
    Evento.create({
      name: req.body.name,
      location: req.body.location,
      address: req.body.address,
      user: req.user.id
    })
      .then(event => {
        res.status(201).json({
          event: event
        })
      })
      .catch(err => {
        res.status(500).json({
          message: err.message
        })
      })
  },

  list: (req, res) => {
    console.log('masuk controllers/events -> list')
    Evento.find()  
      .then(events => {
        res.status(200).json({
          events
        })
      })
      .catch(err => {
        res.status(500).json({
          message: err.message
        })
      })
  },

  search: (req, res) => {
    console.log('masuk controllers/events -> search', req.params.keyword)
    Evento.find({
      name: { $regex: req.params.keyword, $options: 'i'}
    })
      .then(event => {
        res.status(200).json({
          event
        })
      })
      .catch(err => {
        res.status(500).json({
          message: err.message
        })
      })
  },

  update: (req, res) => {
    console.log('masuk controllers/events -> update')
    let user = req.user
    Evento.findOne({
      _id: req.params.id
    })
      .then(update => {
        res.status(201).json({
          update
        })
      })
      .catch(err => {
        res.status(500).json({
          message: err.message
        })
      })
  },

  remove: (req, res) => {
    console.log('masuk controllers/events -> delete')
    let user = req.user
    Evento.findOne({
      _id: req.params.id
    })
      .then(event => {
        res.status(200).json({
          event
        })
      })
      .catch(err => {
        res.status(500).json({
          message: err.message
        })
      })
  }
}