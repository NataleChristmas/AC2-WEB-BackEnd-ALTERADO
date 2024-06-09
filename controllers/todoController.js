const express = require('express');
const TodoModel = require('../models/todo');
const todoController = express.Router();

todoController.getTodosToDos = async (req, res) => {
    const todos = await TodoModel.find({ owner: req.user.id });
    res.status(200).json(todos);
};

todoController.createUmToDo = async (req, res) => {
    const { title, description } = req.body;
    const todo = new TodoModel({ title, description, owner: req.user.id });
    await todo.save();
    res.status(201).json(todo);
};

todoController.updateUmToDo = async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    const todo = await TodoModel.findOneAndUpdate(
        { _id: id, owner: req.user.id }, 
        { title, description }, 
        { new: true });
    res.status(200).json(todo);
};

todoController.deleteUmToDo = async (req, res) => {
    const { id } = req.params;
    await TodoModel.findOneAndDelete({ _id: id, owner: req.user.id });
    res.status(200).json({ mensagem: "Todo deleted successfully!" });
};

todoController.getDesmarcadosToDos = async (req, res) => {
    const todos = await TodoModel.find({ owner: null });
    res.status(200).json(todos);
};

todoController.marcadoToDo = async (req, res) => {
    const { id } = req.params;
    const todo = await TodoModel.findOneAndUpdate(
        { _id: id, owner: null }, 
        { owner: req.user.id }, 
        { new: true });
    res.status(200).json(todo);
};

module.exports = todoController;
