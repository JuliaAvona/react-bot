const telegramAPI = require('node-telegram-bot-api');
const token = '6662201260:AAFP09JyymV7jsx65Wq3goQRAOjJ2el4QIc';
const bot = new telegramAPI(token, { polling: true });

const start = () => {
  bot.setMyCommands([
    { command: '/start', description: 'Start bot' },
    { command: '/info', description: 'Get your name' },
    { command: '/random', description: 'Get random stiker' },
  ]);

  bot.on('message', async (msg) => {
    const text = msg.text;
    const chatID = msg.chat.id;

    if (text === '/start') {
      await bot.sendSticker(
        chatID,
        'https://cdn.tlgrm.app/stickers/5d8/80e/5d880e68-11fe-47e3-bb16-39da41e6ffd9/192/12.webp'
      );
      return bot.sendMessage(
        chatID,
        `Are you Welcome! My creator is Julia https://github.com/JuliaAvona`
      );
    } else if (text === '/info') {
      await bot.sendSticker(
        chatID,
        'https://cdn.tlgrm.app/stickers/5d8/80e/5d880e68-11fe-47e3-bb16-39da41e6ffd9/192/10.webp'
      );
      return bot.sendMessage(chatID, `Your name is ${msg.chat.username}`);
    } else if (text === '/random') {
      const randomNum = Math.round(Math.random() * 12);
      await bot.sendSticker(
        chatID,
        `https://cdn.tlgrm.app/stickers/5d8/80e/5d880e68-11fe-47e3-bb16-39da41e6ffd9/192/${randomNum}.webp`
      );
    } else {
      await bot.sendSticker(
        chatID,
        'https://cdn.tlgrm.app/stickers/5d8/80e/5d880e68-11fe-47e3-bb16-39da41e6ffd9/192/10.webp'
      );
      return bot.sendMessage(chatID, `You send me message: ${text}`);
    }
  });
};

start();
