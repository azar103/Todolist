const mongoose = require('mongoose')

const itemsSchema = mongoose.Schema({
    todoText: { type: String, required: true}
})

module.exports = mongoose.model('Item', itemsSchema)