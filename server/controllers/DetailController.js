import Detail from '../models/Detail.js'

async function create(req, res) {
	try {
		if (!req.body) {
			res.status(400).json({ message: "body of request not exists" })
		}
		const detail = await Detail.create(req.body)
		if (!detail) {
			res.status(422).json({ message: "detail wasn't created. validation failed" })
		}
		res.status(201).json(detail)
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
}
async function get(req, res) {
	try {
		if (req.params.id) {
			const detail = await Detail.findById(req.params.id);
			if (!detail) {
				res.status(404).json({ message: "Detail not finded" });
			}
			res.status(200).json(detail);
		}
		const details = await Detail.find();
		if (!details) {
			res.status(404).json({ message: "Documents was not exists" });
		}
		res.status(200).json(details);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
}
async function update(req, res) {
	if (!req.body) {
		res.status(400).json({ message: "body of request not exists" })
	}
	const { detail, } = req.body
	const updatedDetail = await Detail.findOneAndUpdate({})
}
async function remove(req, res) {

}

export default { create, get, update, remove }