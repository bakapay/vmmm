const Discord = require('discord.js');
exports.run = (client, message, args) => {
if(message.channel.id != "450708852858421248") return;

  if(!message.guild.member(message.author.id).hasPermission('BAN_MEMBERS')) return message.channel.send("**VM** ➤ Nu ai permisiunea necesară.")
  let member = message.mentions.members.first();

const k = new Discord.RichEmbed()
.setAuthor("Comandă: /softban", client.user.avatarURL)
.setDescription("**Descriere:** Dai softban unui membru (ban și unban imediat)\n**Folosire:** /softban [user] [motiv]\n**Exemplu:** /softban <@447385216898695179> De ce nu.")
.setFooter("Cerut de către " + message.author.username)

  if (!member) return message.channel.sendEmbed(k)
  if (member.id === message.author.id) return message.channel.send("**VM** ➤ Nu te poți interzice pe tine insuți.")
  if(!member.kickable) return message.channel.send("**VM** ➤ Nu poți interzice acest utilizator.")
  let p2 = args.slice(2).join(' ');
  let reason = "reason"
  if (!p2) {
    reason = " X"
  } else {
    reason = p2
  }
  
  member.send("**VM** ➤ Ai primit softban pe serverul " + message.guild).then(
        setTimeout(() => {
          member.ban()
        }, 1000))
  
  message.channel.send("**VM** ➤ " + member.user + " a primit softban de la " + message.author + ".")
		
    let mod = new Discord.RichEmbed()
    .setAuthor("Softban | " + message.guild, member.user.avatarURL)
	.addField("Utilizator", member.user.username, true)
	.addField("Motiv", reason, true)
	.setFooter("A primit softban de la " + message.author.username)
    .setTimestamp()
    message.guild.channels.get("449898373709824011").send(mod).then(
	  setTimeout(() => {
      message.guild.unban(member);
     }, 500))
	
	
	
  };
 	exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'softban',
  description: 'COX.',
  usage: 'search <words>'
};
  


