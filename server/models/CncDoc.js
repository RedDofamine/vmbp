const mongoose = require('mongoose');
const { timeSchema, parameterSchema, cipherSchema } = require('./schemas');
const Operation = require('./Operation');
const Detail = require('./Detail');

const docToolSchema = mongoose.Schema({
	cipher: { type: cipherSchema, required: true },
	time: { type: timeSchema, required: true },
	params: [{ type: parameterSchema }],
}, { _id: false })

const docUserSchema = mongoose.Schema({
	name: { type: String },
	group: { type: Number },
	personnelNumber: { type: Number, required: true },
}, { _id: false })

const cncDocSchema = mongoose.Schema({
	number: { type: Number, required: true, unique: true },
	department: { type: Number, required: true },
	cnc: { type: String, required: true },
	os: { type: String, required: true },
	material: { type: String, required: true },
	title: { type: String, required: true },
	cipher: { type: cipherSchema, required: true },
	operation: { type: Number, required: true },
	time: { type: timeSchema, required: true },
	tools: [{ type: docToolSchema, required: true }],
	startDate: { type: Date, required: true, default: Date.now() },
	endDate: { type: Date, required: true, default: Date.now() },
	expirationDate: { type: Date },
	users: [{ type: docUserSchema }]
})

cncDocSchema.pre('save', async function (next) {
	if (!this.detailId) {
		const detailExists = await Detail.findOne({ $and: [{ ciphers: { $in: this.ciphers } }] });
		if (!detailExists) {
			const newDetail = new Detail({ name: this.name, ciphers: this.ciphers, gradations: this.gradations, material: this.material })
			await newDetail.save();
			this.detailId = newDetail._id;
		} else {
			this.detailId = detailExists._id;
		}
	}
	if (!this.operationId) {
		const operationExists = await Operation.findOne({ detailId: this.detailId });

		if (!operationExists) {
			const newOperation = new Operation({ number: this.operation, detailId: this.detailId, cnc: this.cnc, time: this.time });
			await newOperation.save();
			this.operationId = newOperation._id;

			const detail = await Detail.findById(this.detailId);
			detail.operations.push({ number: newOperation.number, operationId: newOperation._id });
			await detail.save();
		}
	}
	next();
});

module.exports = mongoose.model('CncDoc', cncDocSchema);