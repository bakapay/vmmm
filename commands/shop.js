const Discord = require('discord.js');
const fs = require('fs')
exports.run = (client, message, args) => {
	if(message.channel.id != "450708852858421248") return;

message.channel.send("Ai accesat shop-ul serverului VermillionFamily. Pentru a cumpăra un grad, apăsați pe unul dintre reacturile de mai jos.\n:regional_indicator_d: - Gradul de `Diamond Donor`, 150000 points.\n:regional_indicator_p: - Gradul de `Platinum Donor`, 100000 points.\n:regional_indicator_g: - Gradul de `Gold Donor`, 75000 points.\n:regional_indicator_b: - Gradul de `Bronze Donor`, 35000 points.\n\nPoints-urile le obțineți momentan fiind activ pe diferitele channele ale serverului.")

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'shop',
  description: 'VM.',
  usage: 'search <words>'
};