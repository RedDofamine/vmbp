import mongoose from "mongoose"

const typeSchema = mongoose.Schema({
	type: { type: String, required: true, unique: true },
	subType: [{ type: String, required: true, unique: true }],
})

// typeSchema.pre('save', )

const Type = mongoose.model('Type', typeSchema)

export { Type, typeSchema }