const weather = require('weather-js');
const Discord = require('discord.js');
exports.run = (client, message, args) => {
if(message.channel.id != "450708852858421248") return;

const k = new Discord.RichEmbed()
.setAuthor("Comandă: /weather", client.user.avatarURL)
.setDescription("**Descriere:** Arată vremea dintr-o anumită localitate\n**Utilizare:** /weather [locație]\n**Exemplu:** /weather București")
.setFooter("Cerut de către " + message.author.username)

if(!args.join(" ")) return message.channel.send(k)

    weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
	if (err) message.channel.send(err);
	
	if (result.length === 0) {
    message.channel.send(k)
    return;
    }
	
    var current = result[0].current;
    var location = result[0].location;

	const wht = new Discord.RichEmbed()
.setAuthor(`Vremea pentru ${current.observationpoint}`, current.imageUrl)
.setThumbnail(current.imageUrl)
.addField('Tipul temperaturii', "`" + location.degreetype + "`", true)
.addField('Temperatura', "`" + current.temperature + " Grade`", true)
.addField('Vânt', "`" + current.winddisplay + "`", true)
.addField('Umiditate', "`" + current.humidity + "%`", true) 
.setFooter("Cer - " + current.skytext)


message.channel.send(wht)
	});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'weather',
  description: 'COX.',
  usage: 'search <words>'
};