import { Type } from "../models/Type.js"

export async function create(req, res) {
	const { type, subType } = req.body
	try {
		const error = []
		if (!type) error.push('type wasn\'t included')
		if (!subType) error.push('subType wasn\'t included')
		if (error.length) return res.status(500).json({ message: error })

		const newType = await Type.create({ type, subType })
		if (!newType) return res.status(500).json({ message: 'type wasn\'t created' })
		res.status(201).json(newType)
	} catch (err) {
		res.status(500).json({ error: err.message })
	}
}
export async function get(req, res) {
	const { type, subType } = req.body
	// const params = {}
	const queryObj = {}
	try {
		if (type) queryObj.type = type
		if (subType) queryObj.subType = subType
		console.log(queryObj)
		// if (type || subType) params.$or = []
		// if (type) params.$or.push({ type })
		// if (subType) params.$or.push({ subType })

		const types = await Type.find(queryObj)
		if (!types) return res.status(404).json({ message: 'type not founded' })
		res.status(200).json(types)
	} catch (err) {
		res.status(500).json({ error: err.message })
	}
}

export async function update(req, res) {
	const { id } = req.params
	const { type, subType } = req.body
	const error = []
	try {
		!id && error.push(`id wasn't defined`)
		!type && !subType && error.push(`updated statement wasn't defined`)
		if (error.length) return res.status(500).json({ message: error })

		const updatedType = await Type.findOneAndUpdate(
			id,
			{
				$set: { type: type },
				$addToSet: { subType: subType }
			},
			{ new: true }
		)

		if (!updatedType) return res.status(500).json({ message: 'type not updated' })
		res.status(200).json(updatedType)
	} catch (err) {
		res.status(500).json({ error: err.message })
	}
}
export async function pull(req, res) {
	const { type, subType } = req.body
	try {
		let error = [];
		if (!type) error.push('type wasn\'t included')
		if (!subType) error.push('subType  wasn\'t included')
		if (error.length) return res.status(500).json({ message: error })

		const removedType = await Type.findOneAndUpdate(
			{ type: type },
			{ $pullAll: { subType: subType } },
			{ new: true }
		)
		if (!removedType) return res.status(500).json({ message: 'subType wasn\'t removed' })
		res.status(200).json(removedType)
	} catch (err) {
		res.status(500).json({ error: err.message })
	}
}
export async function remove(req, res) {
	const { id } = req.params
	const { type, subType } = req.body
	try {
		if (!id && !type && !subType) return res.status(500).json({ message: "nothing to remove" })
		
	} catch (err) {
		res.status(500).json({ error: err.message })
	}
}

export default { create, get, update, pull, remove }