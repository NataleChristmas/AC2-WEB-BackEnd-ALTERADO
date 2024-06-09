const express = require('express');
const userController = require('../controllers/usersController');
const router = express.Router();

router.get('/all', userController.getTodosUsers);
router.get('/:email', userController.getUserByEmail);
router.post('/new', userController.createUmUser);
router.put('/edit/:id', userController.updateUmUser);
router.delete('/delete/:id', userController.deleteUmUser);
router.get('/count-by-role', userController.countUsersPorCargo);

module.exports = router;