const Discord = require('discord.js');
const fs = require('fs')
const db = require('quick.db')
exports.run = (client, message, args) => {
	if(message.channel.id != "450708852858421248") return;

db.fetchObject(message.author.id).then(i => {
let member = message.mentions.members.first();
if(!member) return message.channel.send("**VM** ➤ În prezent deții " + i.value + " points.")
})

if(message.mentions.members.first()){
let member = message.mentions.members.first();
db.fetchObject(member.user.id).then(i => {
let member = message.mentions.members.first();
if(!i.value){
	message.channel.send("**VM** ➤ " + member.user.username + " deține 0 points.")
} else return message.channel.send("**VM** ➤ " + member.user.username + " deține " + i.value + " points.")
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
  name: 'points',
  description: 'VM.',
  usage: 'search <words>'
};