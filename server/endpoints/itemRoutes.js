import * as ItemController from '../controllers/ItemController.js'
import express from 'express'
const router = express.Router()

router.post('/item', (req, res) => ItemController.create(req, res))
router.get('/item/:id', (req, res) => ItemController.getOne(req, res))
router.get('/item', (req, res) => ItemController.getMany(req, res))
router.patch('/item/:id', (req, res) => ItemController.update(req, res))

export default router