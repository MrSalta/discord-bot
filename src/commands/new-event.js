const Discord = require('discord.js');
const reactionControls = {};
const scheduler = require('../data/tables/gamelist.json');
module.exports = {
  name: 'new-event',
  description: 'Start a new event',
  execute(message) {
    const exampleEmbed = new Discord.RichEmbed()
      .setColor('#0099ff')
      .setTitle('Some title')
      .setURL('https://discordapp.com')
      .setAuthor('Some name', 'https://cdn.discordapp.com/embed/avatars/0.png', 'https://discordapp.com')
      .setDescription('Some description here')
      .setThumbnail('https://cdn.discordapp.com/embed/avatars/0.png')
      .addField('Regular field title', 'Some value here')
      .addBlankField()
      .addField('Inline field title', 'Some value here', true)
      .addField('Inline field title', 'Some value here', true)
      .addField('Inline field title', 'Some value here', true)
      .setImage('https://cdn.discordapp.com/embed/avatars/0.png')
      .setTimestamp()
      .setFooter('Some footer text here', 'https://cdn.discordapp.com/embed/avatars/0.png');

    message.channel.send(exampleEmbed);
  }
};