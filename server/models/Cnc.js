const mongoose = require('mongoose');
const { parameterSchema } = require('./schemas');

const cncSchema = mongoose.Schema({
	name: { type: String, required: true },
	os: { type: String },
	images: [{ type: String }],
	files: [{ type: String }],
	description: { type: String },
	parameters: [parameterSchema],
})

module.exports = mongoose.model('Cnc', cncSchema);