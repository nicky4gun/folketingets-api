const { Router } = require('express');
const personController = require('../controllers/personController');
const validatePerson = require('../middleware/validateperson');
const validateId = require('../middleware/validateid');

const router = Router();

router.get('/', personController.getAllPersons);
router.get('/:id', validateId, personController.getPersonById);
router.post('/',validatePerson, personController.addPerson);
router.put('/:id', validateId, validatePerson, personController.updatePerson);
router.delete('/:id', validateId, personController.deletePerson);

module.exports = router;