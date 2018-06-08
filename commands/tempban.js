const Discord = require('discord.js');
const ms = require("ms");
exports.run = (client, message, args) => {
if(message.channel.id != "450708852858421248") return;

if(!message.guild.member(message.author.id).hasPermission('BAN_MEMBERS')) return message.channel.send("**VM** ➤ Nu ai permisiunea necesară.")
let member = message.mentions.members.first();

const k = new Discord.RichEmbed()
.setAuthor("Comandă: /tempban", client.user.avatarURL)
.setDescription("**Descriere:** Interzici un utilizator, timp opțional\n**Utilizare:** /tempban [user] [timp] [motiv]\n**Exemplu:** /tempban <@447385216898695179> 1d De ce nu.")
.setFooter("Cerut de către " + message.author.username)

  if (!member) return message.channel.send(k)
  if (member.id === message.author.id) return message.channel.send("**VM** ➤ Nu te poți interzice pe tine insuți.")
  if(!member.kickable) return message.channel.send("**VM** ➤ Nu poți interzice acest utilizator.")
  let p2 = args.slice(2).join(' ');
  let reason = "reason"
  if (!p2) {
    reason = " X"
  } else {
    reason = p2
  }
  let time = args[1]
 if(!time) return message.channel.send(k)
	  
	   member.send("       **VM** ➤ Ai fost interzis de pe serverul VermillionFamily	     \nPentru unban contactați unul dintre owneri.").then(
        setTimeout(() => {
          message.guild.members.get(member.user.id).ban(reason)
        }, 1000))
		
	  message.channel.send("**VM** ➤ " + member.user + " a fost interzis de către " + message.author + ".")
	  
    let mod = new Discord.RichEmbed()
    .setAuthor("Ban | " + message.guild, member.user.avatarURL)
	.addField("Utilizator", member.user.username, true)
	.addField("Timp", time, true)
	.addField("Motiv", reason, true)
	.setFooter("Interzis de către " + message.author.username)
    .setTimestamp()
    message.guild.channels.get("449898373709824011").send(mod)
	
    setTimeout(function() {
  message.guild.unban(member);
    },ms(time))
	
  };
 	exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'tempban',
  description: 'VM.',
  usage: 'search <words>'
};
	
