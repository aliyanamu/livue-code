const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const eventScheme = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    name: {
      type: String,
      required: true
    },
    location: {
      type: String
    },
    address: {
      type: String,
      required: true
    },
  }
);

const Evento = mongoose.model('Evento', eventScheme);
module.exports = Evento;