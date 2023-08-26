import express from 'express'
import TypeController from '../controllers/TypeController.js'

const router = express.Router()

router.post('/type', (req, res) => TypeController.create(req, res))
router.get('/type/:id', (req, res) => TypeController.getOne(req, res))
router.get('/type', (req, res) => TypeController.getMany(req, res))
router.patch('/type/:id', (req, res) => TypeController.update(req, res))
router.put('/type/:id', (req, res) => TypeController.put(req, res))
router.delete('/type', (req, res) => TypeController.pull(req, res))
router.delete('/type/id', (req, res) => TypeController.remove(req, res))

export default router