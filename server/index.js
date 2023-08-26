import mongoose from 'mongoose'
import express from 'express'
import { db, server } from './config/config.js'

import detailRouter from './endpoints/detailRoutes.js'
import itemRouter from './endpoints/itemRoutes.js'
import typeRouter from './endpoints/typeRoutes.js'

import telegramRouter from './endpoints/telegramRoutes.js'

const app = new express()
app.use(express.json())
app.use(detailRouter)
app.use(itemRouter)
app.use(typeRouter)
app.use(telegramRouter)


async function dbConnect() {
	await mongoose.connect(db.token, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		dbName: db.name
	})
}
function start() {
	dbConnect()
	app.listen(server.port, () => console.log(`Server running on port ${server.port}`))
}
start()
