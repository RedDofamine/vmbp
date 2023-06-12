const express = require('express');
const router = express.Router();
const DocController = require('../controllers/DocController');

router.post('/doc', (req, res) => DocController.create(req, res));
router.get('/doc', (req, res) => DocController.get(req, res));
router.get('/doc/:id', (req, res) => DocController.get(req, res));
router.put('/doc/:id', (req, res) => DocController.update(req, res));
router.patch('/doc/:id', (req, res) => DocController.update(req, res));
router.delete('/doc/:id', (req, res) => DocController.remove(req, res));

module.exports = router;
