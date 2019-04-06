const Discord = require('discord.js');
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

module.exports = {
  name: 'menu',
  description: 'Testing Menu Stuff',
  async execute(message) {
    let pages = ['Game Menu', 'Destiny 2 Main', 'Overwatch Main', 'Apex Main', 'Anthem Main'];
    let page = 1;

    const exampleEmbed = new Discord.RichEmbed()
      .setColor('#0099ff')
      .setTitle('Some title')
      .setURL('https://discordapp.com')
      .setDescription(pages[page - 1])
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
    console.log('example embed posted');
    //const options = {
    // limit: 15 * 1000,
    // min: 1,
    //  max: 4,
    // page: 1
    //  };

    const m = await message.channel.send(exampleEmbed);
    await m.react(reaction_numbers[1]);
    await m.react(reaction_numbers[2]);
    await m.react(reaction_numbers[3]);
    await m.react(reaction_numbers[4]);
    await m.react("❌");

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
          message.reply('You chose Destiny 2');
          console.log(`${message.author} chose Destiny 2`)
        }
      })
      .catch(collected => {
        console.log(`After a minute, only ${collected.size} out of 4 reacted.`);
      })


    //reaction.emoji.name === "2️⃣" ||
    // reaction.emoji.name === "3️⃣" ||
    //  reaction.emoji.name === "4️⃣" ||
    // reaction.emoji.name === "❌"
  }
};
