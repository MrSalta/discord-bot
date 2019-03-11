const {
  prefix
} = require('./config.json');
require('dotenv'.config();
const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();

client.once('ready', () => {
  console.log('Ready!');
});

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  // set a new item in the Collection
  // with the key as the command name and the value as the exported module
  client.commands.set(command.name, command);
}
client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot)
    return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const commandName = args.shift().toLowerCase();
  if (!client.commands.has(commandName))
    return;
  const command = client.commands.get(commandName);

  try {
    command.execute(message, args);
  } catch (error) {
    console.error(error);
    message.reply('there was an error trying to execute that command!');
  }
});
client.login(process.env.BOT_TOKEN)
require('http').createServer().listen()
