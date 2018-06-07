const Discord = require('discord.js');
exports.run = (client, message, args) => {
if(message.channel.id != "450708852858421248") return;
let member = message.mentions.members.first();

if(!member) {
message.guild.fetchInvites().then(invites => {
	const invite = invites.find(inviter => inviter.inviter.id === message.author.id)
	
const k = new Discord.RichEmbed()
.setAuthor("Invited | VermillionFamily", message.guild.iconURL)
.setDescription("Nu ai invitat niciun utilizator pe server.")
.setTimestamp()
.setFooter(message.author.username)

message.channel.send(k)
if(!invite.maxUses) return message.channel.send(k)
	
const embed = new Discord.RichEmbed()
.setAuthor("Invited | VermillionFamily", message.guild.iconURL)
.setDescription("Ai invitat **" + invite.maxUses + "** utilizatori pe server.")
.setTimestamp()
.setFooter(message.author.username)

message.channel.send(embed)

})
} else {
	message.guild.fetchInvites().then(invites => {
	const invite = invites.find(inviter => inviter.inviter.id === member.user.id);
		
const k2 = new Discord.RichEmbed()
.setAuthor("Invited | VermillionFamily", message.guild.iconURL)
.setDescription(member.user.username + " nu a invitat niciun utilizator pe server.")
.setTimestamp()
.setFooter(member.user.username)		
if(!invite.maxUses) return message.channel.send(k2)
		
const embed2 = new Discord.RichEmbed()
.setAuthor("Invited | VermillionFamily", message.guild.iconURL)
.setDescription(member.user.username + " a invitat **" + invite.maxUses + "** utilizatori pe server.")
.setTimestamp()
.setFooter(member.user.username)

message.channel.send(embed2)

})
}
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'invited',
  description: 'VM.',
  usage: 'search <words>'
};
