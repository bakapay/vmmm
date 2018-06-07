const db = require("quick.db")
const Discord = require('discord.js');
exports.run = (client, message, args) => {
if(message.channel.id != "450708852858421248") return;

let pointss = args[1]
let member = message.mentions.members.first();
if(!message.guild.member(message.author.id).hasPermission('ADMINISTRATOR')) return message.channel.send("**VM** ➤ Nu ai permisiunea necesară.")
const k = new Discord.RichEmbed()
.setAuthor("Comandă: /takepoints", client.user.avatarURL)
.setDescription("**Descriere:** Retragi un număr de points-uri unui utilizator\n**Utilizare:** /takepoints [utilizator] [points]\n**Exemplu:** /takepoints <@447385216898695179> 50")
.setFooter("Cerut de către " + message.author.username)

if(!member) return message.channel.send(k)
if(!pointss) return message.channel.send(k)

db.updateValue(member.user.id, -pointss).then(
db.fetchObject(member.user.id).then(i => {
	message.channel.send("**VM** ➤ `" + member.user.username + "` are acum `" + i.value + "` points.")}))

};
 exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'takepoints',
  description: 'VM.',
  usage: 'search <words>'
};
