const Discord = require('discord.js');
exports.run = (client, message, args) => {
if(message.channel.id != "450708852858421248") return;

    if(!message.guild.member(message.author.id).hasPermission('KICK_MEMBERS')) return message.channel.send("**VM** ➤ Nu ai permisiunea necesară.")
     let member = message.mentions.members.first();
      const k = new Discord.RichEmbed()
.setAuthor("Comanda executată: /kick", client.user.avatarURL)
.setDescription("**Descriere:** Dai afară un utilizator\n**Utilizare:** /kick [user] [motiv]\n**Exemplu:** /kick <@447385216898695179> De ce nu.")
.setFooter("Cerut de către " + message.author.username)

      if (!member)
        return message.channel.sendEmbed(k);
        if (member.id === message.author.id) return message.channel.send("**VM** ➤ Nu te poți da afară pe tine însuți.")
        if(!member.kickable) return message.channel.send("**VM** ➤ Nu pot da afară acest utilizator.")
        let reason = "reason"
        if (!args.slice(1).join(' ')) {
          reason = " X"
        } else {
          reason = args.slice(1).join(' ')
        } 
        member.send("**VM** ➤ Ai fost da afară de pe serverul " + message.guild + "/nDacă vrei să intri iar pe server, folosește acest link: https://discord.gg/mtRgcxG").then(
        setTimeout(() => {
          member.kick(reason)
        }, 1000))
		
	 message.channel.send("**VM** ➤ " + member.user + " a fost dat afară de către " + message.author + ".")

    let mod = new Discord.RichEmbed()
    .setAuthor("Kick | " + message.guild, member.user.avatarURL)
	.addField("Utilizator", member.user.username, true)
	.addField("Motiv", reason, true)
	.setFooter("Dat afară de către " + message.author.username)
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
  name: 'kick',
  description: 'VM.',
  usage: 'search <words>'
};