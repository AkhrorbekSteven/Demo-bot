let token = "1736174942:AAHNseo5S3xAu-G_RTdilOP8lpy0Cw0fFmc"
const TelegramBot = require('node-telegram-bot-api')
const bot = new TelegramBot(token, {polling: true})

// events
// methods

bot.on('message', (event) => {
    let msg = event.text
    let chatId = event.chat.id
    let fName = event.from.first_name
    if (msg === '/start') {
        bot.sendMessage(chatId, 'Welcome, ' + fName, {
            reply_markup: {
                keyboard: [['picture', 'shaftoli']],
                resize_keyboard: true
            }
        })
    }
    if (msg === 'audio') {
        bot.sendVoice(chatId, 'AwACAgIAAxkBAAMOYG78KEqTY2B4seWa344rs2ubrkoAAkUMAAKTB3hLMxGS5PIx8KMeBA')
    }
    if (msg === 'picture') {
        bot.sendPhoto(chatId, './images/175339.jpg')
    }
})

bot.on('voice', (event) => {
    console.log(event);
})
