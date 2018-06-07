const Discord = require('discord.js');
const fs = require('fs');
const moment = require('moment');
const table = require('table')
exports.run = (client, message, args) => {
if(message.channel.id != "450708852858421248") return;

const k = new Discord.RichEmbed()
.setAuthor("Comandă: /warnings", client.user.avatarURL)
.setDescription("**Descriere:** Verifici numărul de warn-uri a unui utilizator\n**Utilizare:** /warnings [utilizator]\n**Exemplu:** /warnings <@447385216898695179>")
.setFooter("Cerut de către " + message.author.username)
let member = message.mentions.members.first();
let warnData = JSON.parse(fs.readFileSync('storage/warns.json', 'utf8'));

if(!member) return message.channel.send(k)
if(!warnData[member.user.id]) return message.channel.send("**VM** ➤ `" + member.user.username + "` nu are nici un warn.")

const kk = new Discord.RichEmbed()
.setAuthor("Warnings | " + member.user.username, member.user.avatarURL)
.addField("Utilizator", member.user.username, true)
.addField("Warns totale", warnData[member.user.id].warns, true)
.setThumbnail(member.user.avatarURL)

message.channel.send(kk)

};
 	exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'warnings',
  description: 'VM.',
  usage: 'search <words>'
};