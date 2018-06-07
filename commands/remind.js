const ms = require("ms");
const Discord = require('discord.js');
exports.run = (client, message, args) => {
const k = new Discord.RichEmbed()
.setAuthor("Comandă: /mute", client.user.avatarURL)
.setDescription("**Descriere:** Primești un memento după un anumit timp\n**Folosire:** /remind [timp] [memento]\n**Exemplu:** /remind 10m Să fac verificare staff.")
.setFooter("Cerut de către " + message.author.username)

let r = args.slice(1).join(' ');
if(!r) return message.channel.send(k)

let time = args[1]
if (!time) return message.channel.sendEmbed(k)
message.channel.send("**VM** ➤ Vei primi un memento după " + time + ".")

  setTimeout(function() {
    message.author.send(":alarm_clock: " + reason)
  },ms(time))
  
  
};
	exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'remind',
  description: 'VM.',
  usage: 'search <words>'
};
