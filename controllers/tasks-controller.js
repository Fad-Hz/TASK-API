const Task = require('../models/Task.js')

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.status(200).json({ success: true, data: tasks })
    } catch (err) {
        res.status(500).json({ success: false, error: err.message })
        console.error(err.stack)
    }
}

const createTask = async (req, res) => {
    try {
        const { name, completed } = req.body
        if (!name) {
            return res.status(400).json({ success: false, error: 'Task name is required' })
        }

        const task = await Task.create({ name, completed })
        res.status(201).json({ success: true, data: task })
    } catch (err) {
        res.status(400).json({ success: false, error: err.message })
        console.error(err.stack)
    }
}

const getTaskById = async (req, res) => {
    try {
        const { id } = req.params
        const task = await Task.findById(id)

        if (!task) {
            return res.status(404).json({ success: false, error: 'Task not found' })
        }

        res.status(200).json({ success: true, data: task })
    } catch (err) {
        res.status(400).json({ success: false, error: err.message })
        console.error(err.stack)
    }
}

const updateTask = async (req, res) => {
    try {
        const { id } = req.params
        const { name, completed } = req.body

        const task = await Task.findByIdAndUpdate(
            id,
            { name, completed },
            { new: true, runValidators: true }
        )

        if (!task) {
            return res.status(404).json({ success: false, error: 'Task not found' })
        }

        res.status(200).json({ success: true, data: task })
    } catch (err) {
        res.status(400).json({ success: false, error: err.message })
        console.error(err.stack)
    }
}

const deleteTask = async (req, res) => {
    try {
        const { id } = req.params
        const task = await Task.findByIdAndDelete(id)

        if (!task) {
            return res.status(404).json({ success: false, error: 'Task not found' })
        }

        res.status(200).json({ success: true, message: 'Task deleted successfully', data: task })
    } catch (err) {
        res.status(400).json({ success: false, error: err.message })
        console.error(err.stack)
    }
}

module.exports = { getAllTasks, createTask, getTaskById, updateTask, deleteTask }