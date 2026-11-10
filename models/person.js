const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  navn: { type: String, required: true },
  parti: { type: String, required: true },
  position: {
      type: String,
      enum: ['minister', 'formand'],
      required: true },
  startDato: { type: Date, required: true }
});

const Minister = mongoose.model('Minister', personSchema, 'ministre');
const Formand = mongoose.model('Formand', personSchema, 'formænd');

module.exports = {
    Minister,
    Formand
};