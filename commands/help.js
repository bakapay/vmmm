const Discord = require('discord.js');
exports.run = (client, message, args) => {
	message.channel.send("**VM** ➤ Pentru ajutor contactați un administrator.")


   };
 	exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'help',
  description: 'VM.',
  usage: 'search <words>'
};