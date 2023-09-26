const telegramAPI = require('node-telegram-bot-api');

const token = '6662201260:AAFP09JyymV7jsx65Wq3goQRAOjJ2el4QIc';

const bot = new telegramAPI(token, { polling: true });

bot.on('message', (msg) => {
  const text = msg.text;
  const chatID = msg.chat.id;
  bot.sendMessage(chatID, `You send me message: ${text}`);
});
