const mongoose = require('mongoose')
const { parameterSchema } = require('./schemas')

const machineSchema = mongoose.Schema({
	title: { type: String, required: true },
	os: { type: String, required: true },
	description: { type: String, required: true },
	parameters: [{ type: parameterSchema }]
})

const Machine = mongoose.model('Machine', machineSchema)

module.exports = { Machine }