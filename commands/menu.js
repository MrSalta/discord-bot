const Discord = require('discord.js');
var emCh
var reaction_numbers = [
  "\u0030\u20E3",
  "\u0031\u20E3",
  "\u0032\u20E3",
  "\u0033\u20E3",
  "\u0034\u20E3",
  "\u0035\u20E3",
  "\u0036\u20E3",
  "\u0037\u20E3",
  "\u0038\u20E3",
  "\u0039\u20E3"]

const gameMenu = new Discord.RichEmbed()
  .setColor('#253b56')
  .setTitle('Game Menu')
  .setURL('http://www.example.com')
  .setDescription('description')
  .setThumbnail('https://cdn.discordapp.com/embed/avatars/0.png')
  .addField('Regular field title', 'Some value here')
  .addBlankField()
  .addField('1️⃣ Destiny 2', '--', true)
  .addField('2️⃣ Overwatch', '--', true)
  .addField('3️⃣ Apex Legends', '--', true)
  .addField('4️⃣ Anthem', '--', true)
  .setImage('https://cdn.discordapp.com/embed/avatars/0.png')
  .setTimestamp()
  .setFooter('Some footer text here', 'https://cdn.discordapp.com/embed/avatars/0.png');

const destinyMenu = new Discord.RichEmbed()
  .setColor('#346f41')
  .setTitle('Destiny Menu')
  .setURL('http://www.example.com')
  .setDescription('d2 description')
  .setThumbnail('https://alternative.me/icons2/destiny.png')
  .addField('Regular field title', 'Some value here')
  .addBlankField()
  .addField('1️⃣ Gambit', '--', true)
  .addField('2️⃣ Strikes', '--', true)
  .addField('3️⃣ Raid', '--', true)
  .addField('4️⃣ Crucible', '--', true)
  .setImage('https://cdn.discordapp.com/embed/avatars/0.png')
  .setTimestamp()
  .setFooter('Some footer text here', 'https://cdn.discordapp.com/embed/avatars/0.png');

function eventReset() {
  var gameChoice = '';
  var activityChoice = '';
}
async function makeEventChannel(message) {
  var server = message.guild;
  await server.createChannel('event-maker', 'text')
    .then(channel => {
      let category = message.guild.channels.find(c => c.name == "event-channels" && c.type == "category")
      channel.setParent(category.id).then(() =>
        channel.lockPermissions()
          .then(() => {
            emCh = channel.id;
            console.log(`Created ${channel.id}. Permissions syncd! Also, that variable you made is ${emCh}`);
          })
          .catch(console.error)
      )
        .catch(console.error)
    })
    .catch(console.error);
}

//let scratchChannel = message.guild.channels.find(`name`, "test-channel")

module.exports = {
  name: 'menu',
  description: 'Testing Menu Stuff',
  async execute(message) {
    message.delete();
    await makeEventChannel(message, guild, channels)

    const m = await message.guild.channels.get(`"${emCh}"`).send(gameMenu);
    await m.react(reaction_numbers[1]);
    await m.react(reaction_numbers[2]);
    await m.react(reaction_numbers[3]);
    await m.react(reaction_numbers[4]);
    await m.react("❌");
    console.log(`Reactions set for gameMenu. Also, ${emCh}`);

    const filter = (reaction, user) => {
      return [
        reaction_numbers[1],
        reaction_numbers[2],
        reaction_numbers[3],
        reaction_numbers[4],
        "❌"
      ].includes(reaction.emoji.name) && user.id === message.author.id;
    };

    m.awaitReactions(filter, {
      max: 1, time: 60000, errors: ['time']
    })
      .then(collected => {
        const reaction = collected.first();

        if (reaction.emoji.name === "\u0031\u20E3") {
          reaction.remove(reaction.users.filter(u => u === message.author).first());
          var gameChoice = "Destiny 2"
          console.log(`Variable gameChoice set to ${gameChoice}`)
          message.guild.channels.find("name", "event-maker").send('Destiny 2 Selected')
          console.log(`${message.author.username} chose Destiny 2`)
          m.edit(destinyMenu);

        }
      })
      .catch(collected => {
        console.log(`After a minute, only ${collected.size} out of 4 reacted.`);
      });
  }
};
