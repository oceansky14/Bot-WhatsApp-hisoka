const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth(),
puppeteer: {
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    executablePath: process.env.PUPPETEER_EXECUTABLE_PATH || '/usr/bin/chromium'
}] 
    }
});

client.on('qr', (qr) => {
    console.log('Scan QR ini:');
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Bot Hisoka Online!');
});

client.on('message', message => {
    if(message.body === 'ping') {
        message.reply('pong');
    }
});

client.initialize();
