const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  navn: { type: String, required: true },
  ministerPost: { type: String },
  parti: { type: String, required: true },
  position: {
      type: String,
      enum: ['minister', 'formand'],
      required: true },
  startDato: { type: Date, required: true }
});

const Person = mongoose.model('Person', personSchema, 'personer');

module.exports = Person;