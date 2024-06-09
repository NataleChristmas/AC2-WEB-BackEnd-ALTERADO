const express = require('express');
const todoController = require('../controllers/todoController');
const router = express.Router();

router.get('/', todoController.getTodosToDos);
router.post('/new', todoController.createUmToDo);
router.put('/:id', todoController.updateUmToDo);
router.delete('/:id', todoController.deleteUmToDo);
router.get('/unassigned', todoController.getDesmarcadosToDos);
router.put('/:id/assign', todoController.marcadoToDo);

module.exports = router;