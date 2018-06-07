const Discord = require('discord.js');
exports.run = (client, message, args) => {
let mesaj = args.slice(0).join(' ');
if(message.author.id === "390155343373533195" || message.author.id === "382184507454914570" || message.author.id === "245823986095620097"){
message.channel.send(mesaj).then(
  message.delete())
}
};

 	exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'send',
  description: 'send.',
  usage: 'search <words>'
};