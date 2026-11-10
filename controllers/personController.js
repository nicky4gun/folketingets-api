const Person = require('../models/person');

exports.getAllPersons = async (req, res) => {
  const persons = await Person.find();
  res.json(persons);
};

exports.getPersonById = async (req, res) => {
  const person = await Person.findById(req.params.id);

  if (!person) {
    return res.status(404).json({ error: 'Person not found' });
  }

  res.json(person);
};

exports.addPerson = async (req, res) => {
  const { navn, ministerPost, parti, position, startDato } = req.body;

  const newPerson = await Person.create({
    navn,
    ministerPost,
    parti,
    position,
    startDato
  });

  res.status(201).json(newPerson);
};

exports.updatePerson = async (req, res) => {
  const { navn, ministerPost, parti, position, startDato } = req.body;

  const updatedPerson = await Person.findByIdAndUpdate(
      req.params.id,
      { navn, ministerPost, parti, position, startDato },
      { new: true, runValidators: true}
  );

  if (!updatedPerson) {
    return res.status(404).json({ error: 'Person not found' });
  }

  res.status(200).json(updatedPerson);
};

exports.deletePerson = async (req, res) => {
  const deletedPerson = await Person.findByIdAndDelete(req.params.id);

  if (!deletedPerson) {
    return res.status(404).json({ error: 'Person not found' });
  }

  res.status(204).send();
};
