const models = require('../models/person');

exports.getAllPersons = async (req, res, next) => {
  try {
    const persons = await models.find();
    res.json(persons);
  } catch (error) {
    next(error);
  }
};

exports.getPersonById = async (req, res, next) => {
  try {
    const person = await models.findById(req.params.id);
    if (!person) {
      return res.status(404).json({ error: 'Person not found' });
    }
    res.json(person);
  } catch (error) {
    next(error);
  }
};

exports.createPerson = async (req, res, next) => {
  try {
    const newPerson = await models.create(req.body);
    res.status(201).json(newPerson);
  } catch (error) {
    next(error);
  }};

exports.updatePerson = async (req, res, next) => {
    try {
    const updatedPerson = await models.findByIdAndUpdate(req.params.id, req.body, { new
: true, runValidators: true });
    if (!updatedPerson) {
      return res.status(404).json({ error: 'Person not found' });
    }
    res.json(updatedPerson);
  } catch (error) {
    next(error);
  }
};
exports.deletePerson = async (req, res, next) => {
  try {
    const deletedPerson = await models.findByIdAndDelete(req.params.id);
    if (!deletedPerson) {
      return res.status(404).json({ error: 'Person not found' });
    }
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
