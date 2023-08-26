import teleBot from 'node-telegram-bot-api'
import express from 'express'
import { telegram } from '../config/config.js'

const router = express.Router()
const bot = new teleBot(telegram.token, telegram.options)


bot.on('message', (msg) => {
	const opts = {
		reply_to_message_id: msg.message_id,
		reply_markup: {
			keyboard: [
				[{ text: "button 1" }, { text: "button 2" }]
			]
		}
	}
	bot.sendMessage(msg.chat.id, 'I\'m a test bot', opts)
})


router.use((req, res, next) => {
	bot.processUpdate(req.body)
	next()
})

export default router