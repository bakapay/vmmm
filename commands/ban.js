const Discord = require('discord.js');
const ms = require("ms");
exports.run = (client, message, args) => {
if(message.channel.id != "450708852858421248") return;

if(!message.guild.member(message.author.id).hasPermission('BAN_MEMBERS')) return message.channel.send("**VM** ➤ Nu ai permisiunea necesară.")
let member = message.mentions.members.first();

const k = new Discord.RichEmbed()
.setAuthor("Comandă: /ban", client.user.avatarURL)
.setDescription("**Descriere:** Interzici un utilizator\n**Utilizare:** /ban [user] [motiv]\n**Exemplu:** /ban <@447385216898695179> De ce nu.")
.setFooter("Cerut de către " + message.author.username)

  if (!member)
  return message.channel.sendEmbed(k)
  if (member.id === message.author.id) return message.channel.send("**VM** ➤ Nu te poți interzice pe tine insuți.")
  if(!member.kickable) return message.channel.send("**VM** ➤ Nu poți interzice acest utilizator.")
  let p2 = args.slice(1).join(' ');
  let reason = "reason"
  if (!p2) {
    reason = " X"
  } else {
    reason = p2
  }
	  
	   member.send("       **VM** ➤ Ai fost interzis de pe serverul VermillionFamily	     \nPentru unban contactați unul dintre owneri.").then(
        setTimeout(() => {
          message.guild.members.get(member.user.id).ban(reason)
        }, 1000))
		
	  message.channel.send("**VM** ➤ " + member.user + " a fost interzis de către " + message.author + ".")
	  
    let mod = new Discord.RichEmbed()
    .setAuthor("Ban | " + message.guild, member.user.avatarURL)
	.addField("Utilizator", member.user.username, true)
	.addField("Motiv", reason, true)
	.setFooter("Interzis de către " + message.author.username)
    .setTimestamp()
    message.guild.channels.get("449898373709824011").send(mod)
	
  };
 	exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ban',
  description: 'VM.',
  usage: 'search <words>'
};
	
