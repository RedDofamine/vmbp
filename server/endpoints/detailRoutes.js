import express from 'express'
const router = express.Router()
import DetailController from '../controllers/DetailController.js'

router.post('/detail', (req, res) => DetailController.create(req, res));
router.get('/detail', (req, res) => DetailController.get(req, res));
router.get('/detail/:id', (req, res) => DetailController.get(req, res));
router.put('/detail/:id', (req, res) => DetailController.update(req, res));
router.patch('/detail/:id', (req, res) => DetailController.update(req, res));
router.delete('/detail/:id', (req, res) => DetailController.remove(req, res));

export default router;