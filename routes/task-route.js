const { Router } = require('express')
const route = Router()
const {
    getAllTasks,
    createTask,
    getTaskById,
    updateTask,
    deleteTask } = require('../controllers/tasks-controller.js')

route.get('/', getAllTasks)        //get all
route.post('/', createTask)        //create
route.get('/:id', getTaskById)    //get by id
route.put('/:id', updateTask)     //update
route.delete('/:id', deleteTask)  //delete

module.exports = route