const Discord = require('discord.js');
exports.run = (client, message, args) => {
if(message.channel.id != "450708852858421248") return;
let member = message.mentions.members.first();
function fInv() {
  message.guild.fetchInvites();
}
	
if(!member) {
fInv().then(invites => {
 const invite = invites.find(inviter => inviter.inviter.id === message.author.id);
});
	
const embed = new Discord.RichEmbed()
.setAuthor("Invited | VermillionFamily", message.guild.iconURL)
.setDescription("Ai invitat **" + invite.uses + "** utilizatori pe server.")
.setTimestamp()
.setFooter(message.author.username)

message.channel.send(embed)

})
} else {
function fInv() {
  message.guild.fetchInvites();
}
fInv().then(invites => {
 const invite2 = invites.find(inviter => inviter.inviter.id === message.author.id);
});		
const embed2 = new Discord.RichEmbed()
.setAuthor("Invited | VermillionFamily", message.guild.iconURL)
.setDescription(member.user.username + " a invitat **" + invite.uses + "** utilizatori pe server.")
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
