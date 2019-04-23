const Discord = require('discord.js');
var emCh
var m
var gameChoice

//Declare reaction emojis so I don't have to remember their unicode values
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

//Top Menu (Choose your game)
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

//Menu 2 - Destiny 2
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

//How to make a Discord channel
function makeChannel(message) {
  message.guild.createChannel('event-maker', 'text')
    .then(channel => {
      //Then put it in the right group
      let category = message.guild.channels.find(c => c.name == "event-channels" && c.type == "category")
      channel.setParent(category.id)
        .then(() =>
          //Then apply the group permissions  
          channel.lockPermissions()
            .then(() => {
              console.log(`Permissions syncd! Also that string: ${channel.id} `)
            })
            .catch(console.error)
        )
        .catch(console.error);
      channel.send('Channel active')
      return channel;
    })
    .catch(console.error);
}

module.exports = {
  name: 'menu',
  description: 'Testing Menu Stuff',
  async execute(message) {

    //Delete the command message
    message.delete();

    //Create the channel
    makeChannel(message)
    var newCh = makeChannel()

    //Send the menu to the new channel
    try {
      const m = await message.guild.channels.find("id", `"${newCh}"`).send(gameMenu);

      //Add reactions to make the menu
      await m.react(reaction_numbers[1]);
      await m.react(reaction_numbers[2]);
      await m.react(reaction_numbers[3]);
      await m.react(reaction_numbers[4]);
      await m.react("❌");
      console.log(`Reactions set for gameMenu. Also, ${newCh}`);

      //filter reactions to only look for the numbers and the user
      const filter = (reaction, user) => {
        return [
          reaction_numbers[1],
          reaction_numbers[2],
          reaction_numbers[3],
          reaction_numbers[4],
          "❌"
        ].includes(reaction.emoji.name) && user.id === message.author.id;
      };

      // Start looking for reactions
      m.awaitReactions(filter, {
        max: 1, time: 60000, errors: ['time']
      })
        .then(collected => {
          const reaction = collected.first();

          //Destiny 2 Selected
          if (reaction.emoji.name === "\u0031\u20E3") {
            reaction.remove(reaction.users.filter(u => u === message.author).first());
            let gameChoice = "Destiny 2"
            message.guild.channels.find("name", "event-maker").send('Destiny 2 Selected')
            console.log(`${message.author.username} chose Destiny 2`)
            m.edit(destinyMenu);

          }
        })
        .catch(collected => {

          //Timeout message
          console.log(`After a minute, only ${collected.size} out of 4 reacted.`);
        });
    }
    catch (error) {
      console.log(error)
    }

  }
}
