const mongoose = require('mongoose')

const messageSchema = mongoose.Schema({
	text: { type: String, required: true },
	chatId: { type: String, required: true },
	createdAt: { type: Date, default: Date.now() },
})

module.exports = mongoose.model('Message', messageSchema)