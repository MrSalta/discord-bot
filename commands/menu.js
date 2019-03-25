const Discord = require('discord.js');

module.exports = {
  name: 'menu',
  description: 'Testing Menu Stuff',
  execute(message) {
    const embed = new Discord.RichEmbed()
      .setColor("253b56")
      .setAuthor('Some name', 'https://cdn.discordapp.com/embed/avatars/0.png', 'https://discordapp.com')
      .setTitle("Test Title")
      .setDescription("Random Stuff")
      .setFooter("More stuff", "https://discord.net")
      .setImage("https://cdn.discordapp.com/embed/avatars/0.png")
      .setThumbnail("https://cdn.discordapp.com/embed/avatars/0.png")
      .setTimestamp()
      //.setURL("if you want one")
      .addField("1⃣  Destiny 2", "---")
      .addField("2⃣ Overwatch", "---")
      .addField("3⃣  Apex Legends", "---")
      .addField("4⃣  Anthem", "---");

    message.channel.send({ embed });
    const collector = message.createReactionCollector((reaction, user) =>
      user.id === message.author.id &&
      reaction.emoji.name === "1⃣" ||
      reaction.emoji.name === "2⃣" ||
      reaction.emoji.name === "3⃣" ||
      reaction.emoji.name === "❌"
    ).once("collect", reaction =>)
    msg => {
      msg.react('1⃣ ');
      msg.react('2⃣');
      msg.react('3⃣ ');
      msg.react('❌');
    }).catch(() =>
      console.error('No Reaction.'));
}
};