const Discord = require('discord.js')
exports.run = function(client, msg, args, guild, message) {
  if (msg.author.id !== '390155343373533195') return;
  
  var code = args.join(' ');
  try {
    var res = eval(code);
    if (typeof res !== 'string') {
      res = require('util').inspect(res);
    }
  } catch (e) {
    res = e.message;
  }
  var embed = {
    description:`**Comanda:** ${code}
    **Răspuns:** ${res}`
  };
  msg.channel.sendMessage('', {embed: embed});
};
 	exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'eval',
  description: 'COX.',
  usage: 'search <words>'
};