exports.run = (client, message, args) => {
if(message.channel.id != "450708852858421248") return;

  let command;
  if (client.commands.has(args[0])) {
    command = args[0];
  } else if (client.aliases.has(args[0])) {
    command = client.aliases.get(args[0]);
  }
  if (!command) {
    return message.channel.send(`**VM** ➤ Nu găsesc comanda -  **${args[0]}**`);
  } else {
    message.channel.send(`**VM** ➤ Se dă reload`)
      .then(m => {
        client.reload(command)
          .then(() => {
            m.edit(`**VM** ➤  **${command}** a primit reload cu succes`);
          })
          .catch(e => {
            m.edit(`**VM** ➤  **Eroare**\n\`\`\`${e.stack}\`\`\``);
          });
      });
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['r'],
  permLevel: 4
};

exports.help = {
  name: 'reload',
  description: 'Dai reload unei comenzi. [doar developerul]',
  usage: 'reload <command>'
};
