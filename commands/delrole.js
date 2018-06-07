const Discord = require('discord.js');
exports.run = (client, message, args) => {
if(message.channel.id != "450708852858421248") return;

  if(!message.guild.member(message.author.id).hasPermission('MANAGE_ROLES')) return message.channel.send("**VM** ➤ Nu ai permisiunea necesară.")

const k = new Discord.RichEmbed()
.setAuthor("Comandă: /delrole", client.user.avatarURL)
.setDescription("**Descriere:** Ștergi un role\n**Utilizare:** /delrole [name]\n**Exemplu:** /delrole Membru")
.setFooter("Cerut de către " + message.author.username)

  if(!args.slice(0).join(' ')) return message.channel.send(k);

  let role = args.slice(0).join(' ')
  
  message.guild.roles.find('name', role).delete()
  
  message.channel.send("**VM** ➤ A fost șters role-ul " + role)
  
   };
 	exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'delrole',
  description: 'VM.',
  usage: 'search <words>'
};
