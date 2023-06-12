const express = require('express')
const router = express.Router()
const DetailController = require('../controllers/DetailController')

router.post('/detail', (req, res) => DetailController.create(req, res));
router.get('/detail', (req, res) => DetailController.get(req, res));
router.get('/detail/:id', (req, res) => DetailController.get(req, res));
router.put('/detail/:id', (req, res) => DetailController.update(req, res));
router.patch('/detail/:id', (req, res) => DetailController.update(req, res));
router.delete('/detail/:id', (req, res) => DetailController.remove(req, res));

module.exports = router;