const User = require('../models/User');

class UserController {
	async createUser(req, res) {
		if (!req.body) {
			res.status(400).json({ message: 'No request body' });
		}
		
	}
}