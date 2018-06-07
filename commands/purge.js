const Discord = require('discord.js');
exports.run = function(client, message, args) {
  if(message.channel.id != "450708852858421248") return;

const k = new Discord.RichEmbed()
.setAuthor("Comanda executată: /purge", client.user.avatarURL)
.setDescription("**Descriere:** Stergi mesajele de pe un channel. (limită - 100)\n**Folosire:** /purge [număr]\n**Exemplu:** /purge 45")
.setFooter("Cerut de către " + message.author.username)

    const deleteCount = parseInt(args[0], 10); 
 if (!message.guild.member(message.author.id).hasPermission("MANAGE_MESSAGES")) return message.channel.send("**VM** ➤ Nu ai permisiunea necesară.") 
  if(!deleteCount || deleteCount < 2 || deleteCount > 100) return message.channel.send(k)
  message.delete() 
message.channel.fetchMessages({
  }).then(messages => message.channel.bulkDelete(deleteCount))
	message.channel.send("**VM** ➤ Se șterg " + deleteCount + " mesaje.").then(	
	setTimeout(() => {
	message.channel.bulkDelete(deleteCount)
        }, 500))

  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'purge',
  description: 'Delete some messages from a guild.',
  usage: 'purge <number>'
};