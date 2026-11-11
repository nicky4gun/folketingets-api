const { Router } = require('express');
const personController = require('../controllers/personController');
const validatePerson = require('../middleware/validateperson');

const router = Router();

router.get('/', personController.getAllPersons);
router.get('/:id', personController.getPersonById);
router.post('/',validatePerson, personController.addPerson);
router.put('/:id', validatePerson, personController.updatePerson);
router.delete('/:id', personController.deletePerson);

module.exports = router;