const Discord = require('discord.js');
exports.run = (client, message, args) => {
	if(message.channel.id != "450708852858421248") return;

let icon = "icon"
if(!message.guild.iconURL){
icon = message.author.avatarURL
} else {
icon = message.guild.iconURL
}

	const embed = new Discord.RichEmbed()
	.setAuthor(message.guild, message.guild.iconURL)
	.addField("ID", "`" + message.guild.id + "`", true)
	.addField("Nume", "`" + message.guild + "`", true)
	.addField("Regiune", "`" + message.guild.region + "`", true)
	.addField("Channels", "`" + message.guild.channels.size + "`", true)
	.addField("Membri", "`" + message.guild.memberCount + "`", true)
	.addField("Humans", "`" + message.guild.members.filter(m => !m.user.bot).size + "`", true)
	.addField("Bots", "`" + message.guild.members.filter(m => m.user.bot).size + "`", true)
	.addField("Online", "`" + message.guild.members.filter(m => m.presence.status !== 'offline').size + "`", true)
	.setTimestamp(message.guild.createdAt)
	.setFooter("Creation date ")
	.setThumbnail(message.guild.iconURL)
	    message.channel.sendEmbed(embed)
		  };
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp'],
  permLevel: 0
};

exports.help = {
  name: 'serverinfo',
  description: 'VM.',
  usage: 'ban [user]'
};