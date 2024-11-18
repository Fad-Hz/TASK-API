const { Schema, model } = require('mongoose')

const TaskSchema = new Schema({
    name: { type: String, required: [true, 'nama task harus diisi '] },
    completed: { type: Boolean, default: false }
})

module.exports = model('Task', TaskSchema)