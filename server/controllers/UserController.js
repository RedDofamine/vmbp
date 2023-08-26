// const User = require('../models/User');
import User from '../models/User'

class UserController {
	async createUser(req, res) {
		if (!req.body) {
			res.status(400).json({ message: 'No request body' });
		}

	}
}
export default UserController