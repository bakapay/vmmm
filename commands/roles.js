const Discord = require('discord.js');
exports.run = (client, message, args) => {
if(message.channel.id != "450708852858421248") return;

	const embed = new Discord.RichEmbed()
	.setAuthor("Roles | VermillionFamily", message.guild.iconURL)
	.setDescription("`" + message.guild.roles.map(r => r.name).join("`, `") + "`")
	.setFooter("Numărul de role-uri : " + message.guild.roles.size)
	.setThumbnail(message.guild.iconURL)
	
	message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp'],
  permLevel: 0
};

exports.help = {
  name: 'roles',
  description: 'VM.',
  usage: 'ban [user]'
};