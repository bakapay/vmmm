const ms = require("ms");
const Discord = require('discord.js');
exports.run = (client, message, args) => {
if(message.channel.id != "450708852858421248") return;

let mr = message.guild.roles.find("name", "Vorbire Interzisă")
if (!mr) return message.channel.send("**VM** ➤ Role-ul **Vorbire Interzisă** nu există.")
if(!message.guild.member(message.author.id).hasPermission('MUTE_MEMBERS')) return message.channel.send("**VM** ➤ Nu ai permisiunea necesară.")
let member = message.mentions.members.first();

const k = new Discord.RichEmbed()
.setAuthor("Comandă: /mute", client.user.avatarURL)
.setDescription("**Descriere:** Interzici vorbirea unui utilizator, timp opțional\n**Utilizare:** /mute [utilizator] [timp] [motiv]\n**Exemplu:** /mute <@447385216898695179> 10m De ce nu.")
.setFooter("Cerut de către " + message.author.username)
if (!member) return message.channel.send(k)
if(message.guild.members.get(member.user.id).roles.has(mr.id)) return message.channel.send("**VM** ➤ Acest utilizator deja are vorbirea interzisă.")
if (member.id === message.author.id) return message.channel.send("**VM** ➤ Nu-ți poți interzice vorbirea ție însuți.")
if(!member.kickable) return message.channel.send("**VM** ➤ Nu pot interzice vorbirea acestui utilizator.")

  let time = args[1]
if(!time) return message.channel.send(k)

let r = args.slice(2).join(' ');
let reason = "reason"
if (!r) {
  reason = " X"
} else {
  reason = r
}

message.channel.send("**VM** ➤ Vorbirea lui " + member.user + " a fost interzisă de către " + message.author + ".")

if(!reason){
member.send("Vorbirea ți-a fost interzisă pe serverul " + message.guild + ", motivul nu a fost specificat.")
} else {
member.send("Vorbirea ți-a fost interzisă pe serverul " + message.guild + ", " + reason)} 

    member.addRole(mr.id)
  
    let mod = new Discord.RichEmbed()
  .setAuthor("Mute | " + message.guild, member.user.avatarURL)
	.addField("Utilizator", member.user.username, true)
	.addField("Timp", time, true)
	.addField("Motiv", reason, true)
	.setFooter("Vorbirea interzisă de către " + message.author.username)
  .setTimestamp()
    message.guild.channels.get("449898373709824011").send(mod)

  setTimeout(function() {
    member.removeRole(mr.id).then(
      message.channel.send("**VM** ➤ " + member.user + " acum poate vorbi."))
  },ms(time))

};
	exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'mute',
  description: 'VM.',
  usage: 'search <words>'
};