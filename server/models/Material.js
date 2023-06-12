const mongoose = require('mongoose');
const { parameterSchema } = require('./schemas');

const materialSchema = mongoose.Schema({
	name: { type: String, required: true },
	description: { type: String, required: true },
	parameters: [parameterSchema],
})

module.exports = mongoose.model('Material', materialSchema);