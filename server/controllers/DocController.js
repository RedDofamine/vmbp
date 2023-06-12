const Doc = require('../models/CncDoc');

async function create(req, res) {
	try {
		if (!req.body) {
			res.status(400).json({ message: 'body of request not exists' });
		}
		const doc = new Doc(req.body);
		if (!doc) {
			res.status(422).json({ message: 'body of request fails validation' });
		}
		await doc.save();
		res.status(201).json(doc);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}

}
async function get(req, res) {
	try {
		if (req.params.id) {
			const doc = await Doc.findById(req.params.id);
			if (!doc) {
				res.status(404).json({ message: "Document not finded" });
			}
			res.status(200).json(doc);
		}
		const docs = await Doc.find();
		if (!docs) {
			res.status(404).json({ message: "Documents was not exists" });
		}
		res.status(200).json(docs);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
}
async function update(req, res) {
	try {
		if (req.params.id) {
			if (!req.body) {
				res.status(400).json({ message: "Body of request are not exists" });
			}
			const updatedDoc = await Doc.findByIdAndUpdate(req.params.id, req.body);
			if (!updatedDoc) {
				res.status(404).json({ message: "wasn't updated" });
			}
			res.status(200).json(updatedDoc);
		}
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
}
async function remove(req, res) {

}

module.exports = { create, get, update, remove }