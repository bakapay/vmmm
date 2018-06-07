const Discord = require('discord.js');
exports.run = (client, message, args) => {
if(message.channel.id != "450708852858421248") return;
let member = message.mentions.members.first();

if(!member) {
message.guild.fetchInvites().then(invites => {
	const invite = invites.find(inviter => inviter.inviter.id === message.author.id);

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

const embed = new Discord.RichEmbed()
.setAuthor("Invited | VermillionFamily", message.guild.iconURL)
.setDescription(member.user.username + " a invitat **" + invite.maxUses + "** utilizatori pe server.")
.setTimestamp()
.setFooter(member.user.username)

message.channel.send(embed)

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