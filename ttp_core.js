const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    var today = new Date();
    let ttpTestChannel = client.channels.get("642490607079653416")
    //client.user.setActivity('with a ČKD Tatra T6B5');
    ttpTestChannel.send(today)
});

client.on('message', message => {
    if (message.content == 'ping?') {
    	message.reply('oh fuck off its late and im tired');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
