const config = require('./config/config')

const mongoose = require('mongoose')
const express = require('express')

const usersRouter = require('./endpoints/userRouter')
// const docRouter = require('./endpoints/docRoutes')
const detailRouter = require('./endpoints/detailRoutes')

const app = new express()
app.use(express.json())
app.use(usersRouter)
// app.use(docRouter)
app.use(detailRouter)

async function dbConnect() {
	await mongoose.connect(config.db.token, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		dbName: config.db.name
	})
}
function start() {
	dbConnect()

	app.listen(config.server.port, () => console.log(`Server running on port ${config.server.port}`))
}
start()