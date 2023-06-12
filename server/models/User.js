const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
	name: { type: String, required: true },
	personnelNumber: { type: Number, required: true },
	password: { type: String, required: true },
	phone: { type: String },
	department: { type: Number },
	group: { type: Number },
	role: { type: String, required: true },
	description: { type: String },
	image: { type: String },
})

module.exports = mongoose.model('User', userSchema);