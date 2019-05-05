const { Client } = require('discord.js');

const client = new Client();

client.on('ready', () => {
    console.log('BOT is ready');
});

client.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('Pong!');
    }
    if (msg.content === 'hello') {
        msg.reply('HOLA mundo')
    }
});

client.login('NTc0NDQzODA3NjkzODY0OTc5.XM5gaA.i6ev0Rvs9iX-kkWbG6oDWk9IgeI');