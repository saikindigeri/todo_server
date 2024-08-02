const Todo = require('../models/todoModel');


exports.createTodo = async (req, res) => {
    try {
        const todo = new Todo({
            text: req.body.text
        });
        await todo.save();
        res.status(201).json(todo);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json(todos);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};



exports.updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { text, completed } = req.body;

        
        const updatedTodo = await Todo.findByIdAndUpdate(id, { text, completed }, { new: true });

        if (!updatedTodo) {
            return res.status(404).json({ message: 'Todo not found' });
        }

        res.json(updatedTodo);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};





exports.deleteTodo = async (req, res) => {
    try {
        await Todo.findByIdAndDelete(req.params.id);
        res.status(204).end();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
