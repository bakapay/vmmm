const Discord = require('discord.js');
exports.run = (client, message, args) => {
if(message.channel.id != "450708852858421248") return;
  if(!message.guild.member(message.author.id).hasPermission('MANAGE_ROLES')) return message.channel.send("**VM** ➤ Nu ai permisiunea necesară.")
  let member = message.mentions.members.first();

const k = new Discord.RichEmbed()
.setAuthor("Comanda executată: /addrole", client.user.avatarURL)
.setDescription("**Descriere:** Adaugi un role nou\n**Folosire:** /addrole [nume]\n**Exemplu:** /addrole Vermillion")
.setFooter("Cerut de către " + message.author.username)
.setColor(0x070707)

  if(!args.slice(0).join(' ')) return message.channel.send(k);

  let p2 = args.slice(0).join(' ');
 
message.guild.createRole({
  name: p2
  })
  
  message.channel.send("**VM** ➤ A fost creat role-ul " + p2)
  
   };
 	exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'addrole',
  description: 'VM.',
  usage: 'search <words>'
};




