const person = require('../models/person');

exports.getAllPersons = async (req, res, ) => {

    const persons = await person.Minister.find();
    res.json(persons);
};

exports.getPersonById = async (req, res, ) => {
  const person = await person.Minister.findById(req.params.id);
    if (!person) {
      return res.status(404).json({ error: 'Person not found' });
    }
    res.json(person);
};

exports.createPerson = async (req, res, ) => {

    const newPerson = await person.Minister.create(req.body);
    res.status(201).json(newPerson);

  };

exports.updatePerson = async (req, res, ) => {

    const updatedPerson = await person.Minister.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true});
    if (!updatedPerson) {
      return res.status(404).json({ error: 'Person not found' });
    }
    res.json(updatedPerson);
};
exports.deletePerson = async (req, res, ) => {
    const deletedPerson = await person.Minister.findByIdAndDelete(req.params.id);
    if (!deletedPerson) {
      return res.status(404).json({ error: 'Person not found' });
    }
    res.status(204).end();

};
