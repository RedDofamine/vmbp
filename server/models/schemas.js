const mongoose = require('mongoose');

function validateTime(value) {
	return value >= 0 && value < 60;
}
const timeSchema = mongoose.Schema({
	hours: Number,
	minutes: { type: Number, validate: validateTime, message: 'minutes should be equal to 60 or less' },
	seconds: { type: Number, validate: validateTime, message: 'seconds should be equal to 60 or less' },
}, { _id: false })

const cipherSchema = mongoose.Schema({
	origin: { type: String, required: true, unique: true },
	gradations: [{ type: Number }],
	reference: [{ type: String }],
}, { _id: false })

const parameterSchema = mongoose.Schema({
	parameterName: { type: String, required: true },
	parameterValue: { type: mongoose.Mixed, required: true },
	description: String,
}, { _id: false })

module.exports = { parameterSchema, timeSchema, cipherSchema, typeSchema };


