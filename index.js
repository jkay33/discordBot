require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();

const TOKEN = process.env.TOKEN;
bot.login(TOKEN);

//verifying connection to bot
bot.on('ready', () => {
    console.info(`Logged in as ${bot.user.tag}!`);
});

//listening for chat event
bot.on('message', msg => {
    if (msg.content === 'hi bot') {
        msg.reply('hi'); 
    }
});

bot.on('message', msg => {
    if (msg.content.includes('-play one week')) {
        msg.channel.send('That is enough of your troll');
        msg.member.kick('Keep those to yourself');
    }
});