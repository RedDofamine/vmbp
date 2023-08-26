import mongoose from 'mongoose';
import { parameterSchema, cipherSchema } from './schemas.js'
import { Type } from './Type.js'





const itemSchema = mongoose.Schema({
	title: { type: String, required: true },
	type: { type: mongoose.Schema.Types.String, ref: 'Type', required: true },
	cipherSchema,
	material: { type: String },
	description: { type: String },
	parameters: [{ type: parameterSchema }],
	images: [{ type: String }],
	files: [{ type: String }],
})

const Item = mongoose.model('Item', itemSchema)

export { Item }





















// const toolSubTypes = {
// 	"cutting": ["cutting", "milling", "drilling"],
// 	"measuring": ["calipers", "calibration", "brace"],
// 	"device": ["tool holder", "bushing", "fixture", "collet"],
// };


// const typeSchema = mongoose.Schema({
// 	type: {
// 		type: String,
// 		enum: Object.keys(toolSubTypes),
// 		required: true,
// 	},
// 	subType: {
// 		type: String,
// 		validate: {
// 			validator: function (value) {
// 				return toolSubTypes[this.type]
// 			},
// 			message: "Недопустимое значение для подтипа инструмента",
// 		},
// 		required: true,
// 	}
// })

// const toolSchema = mongoose.Schema({
// 	title: { type: String, required: true },
// 	typeSchema,
// 	cipher: { type: cipherSchema, required: true, unique: true },
// 	material: { type: String },
// 	description: { type: String },
// 	parameters: [{ type: parameterSchema }],
// 	images: [{ type: String }],
// 	files: [{ type: String }],
// })

// module.exports = mongoose.model('Tool', toolSchema);