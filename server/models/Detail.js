import mongoose from 'mongoose'
import { cipherSchema, timeSchema } from './schemas.js'

const operationSchema = mongoose.Schema({
	title: { type: String },
	number: { type: Number, required: true },
	machine: { type: String },
	os: { type: String },
	time: { type: timeSchema },
	images: [{ type: String }],
	files: [{ type: String }],
	users: [{ type: String }],
})

const detailSchema = mongoose.Schema({
	title: { type: String, required: true },
	cipher: { type: cipherSchema, required: true, unique: true },
	product: { type: String },
	user: { type: String },
	operations: [{ type: operationSchema, required: true, unique: true }],
	material: { type: String, required: true },
	images: [{ type: String }],
	files: [{ type: String }],
})

// detailSchema.pre('updateOne', async function (next) {

// })

// operationSchema.pre('save', async function (next) {
// 	const operationExists = await this.constructor.findOne({ cipher: this.cipher.origin, number: this.number, });
// 	if (operationExists) {
// 		const error = new Error('Operation already exists');
// 		return next(error);
// 	}
// 	next();
// })

export default mongoose.model('Detail', detailSchema);