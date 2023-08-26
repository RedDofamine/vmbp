import { Item } from '../models/Item.js'

export async function create(req, res) {
	const { title, type, cipher, material, description, parameters, images, files } = req.body
	try {

		const itemExists = await Item.find()
		console.log(itemExists)
		if (itemExists.length) return res.status(404).json({ message: 'item has been already exists' })
		const newItem = await Item.create(item)
		if (!newItem) return res.status(500).json({ message: 'item wasn\'t created' })
		res.status(201).json(newItem)
	} catch (err) {
		res.status(500).json({ error: err.message })
	}
}
export async function getOne(req, res) {
	const { id } = req.params
	let item
	try {
		if (id) {
			item = await Item.findById
		}
		if (!item) return res.status(404).json({ message: 'item not finded' })
		res.status(200).json(item)
	} catch (err) {
		res.status(500).json({ error: err.message })
	}
}
export async function getMany(req, res) {
	const { id, cipher, type, subType } = req.body
	let params = [], items
	try {
		if (id) params.push(id)
		if (cipher) params.push(origin)
		if (type) params.push(type)
		if (subType) params.push(subType)

		items = await Item.find(params)
		if (!items) return res.status(404).json({ message: 'items not founded' })
		res.status(200).json(items)
	} catch (err) {
		res.status(500).json({ error: err.message })
	}
}
export async function update(req, res) {

}
export async function remove(req, res) {

}