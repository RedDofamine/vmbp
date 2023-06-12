const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

router.get('/users', (req, res) => UserController.getUsers(req, res));
router.get('/users/:id', (req, res) => UserController.getUser(req, res));
router.post('/users', (req, res) => UserController.createUser(req, res));
router.put('/users/:id', (req, res) => UserController.updateUser(req, res));
router.delete('/users/:id', (req, res) => UserController.deleteUser(req, res));

module.exports = router;