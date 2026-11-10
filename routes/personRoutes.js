const { Router } = require('express');
const personController = require('../controllers/personController');

const router = Router();

router.get('/', personController.getAllPersons);
router.get('/:id', personController.getPersonById);
router.post('/', personController.addPerson);
router.put('/:id', personController.updatePerson);
router.delete('/:id', personController.deletePerson);

module.exports = router;