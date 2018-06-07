const Discord = require('discord.js');
const fs = require('fs');
const moment = require('moment');
exports.run = (client, message, args) => {
  if(message.channel.id != "450708852858421248") return;

let server = message.guild
let mr = message.guild.roles.find("name", "Vorbire Interzisă")
let member = message.mentions.members.first();
const k = new Discord.RichEmbed()
.setAuthor("Comandă: /warn", client.user.avatarURL)
.setDescription("**Descriere:** Dai warn unui utilizator\n**Utilizare:** /warn [utilizator] [motiv]\n**Exemplu:** /warn <@447385216898695179> De ce nu.")
.setFooter("Cerut de către " + message.author.username)
if (!member)
return message.channel.send(k)
let user = member.user.id
let warnData = JSON.parse(fs.readFileSync('storage/warns.json', 'utf8'));
let bantime = 605800;
if(!message.guild.member(message.author.id).hasPermission('DEAFEN_MEMBERS')) return message.channel.send("**VM** ➤ Nu ai permisiunea necesară.")
if(!warnData[user]) warnData[user] = {}
if(!warnData[user].warns) warnData[user].warns = 0;

if (member.id === message.author.id) return message.channel.send("**VM** ➤ Nu-ți poți da warn ție însuți.")

let r = args.slice(1).join(' ');
if(!r) return message.channel.send(k)
warnData[user].warns += 1;

message.channel.send("**VM** ➤ Utilizatorul " + member.user + " a primit warn de la " + message.author + ".")

    let mod = new Discord.RichEmbed()
  .setAuthor("Warn | " + message.guild, member.user.avatarURL)
	.addField("Utilizator", member.user.username, true)
	.addField("Motiv", r, true)
	.addField("Warns totale", warnData[user].warns, true)
	.setFooter("Warn oferit de către " + message.author.username)
  .setTimestamp()
    message.guild.channels.get("449898373709824011").send(mod)

  fs.writeFile('storage/warns.json', JSON.stringify(warnData), (err) => {
  if (err) console.error(err);});
};
 	exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'warn',
  description: 'VM.',
  usage: 'search <words>'
};






