const mongoose = require('mongoose');

const groupSchema = mongoose.Schema({
	number: { type: Number, required: true },
	department: { type: Number, required: true },
	users: [{ type: Number }],
	cncs: [{ type: String }],
})

module.exports = mongoose.model('Group', groupSchema);