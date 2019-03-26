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

const pages = {
  1: {
    title: "Test Title",
    color: 0x253b56,
    author: {
      name: 'Some name',
      icon_url: 'https://cdn.discordapp.com/embed/avatars/0.png',
      url: 'https://discordapp.com',
    },
    description: "Random Stuff",
    footer: {
      text: "More stuff",
      icon_url: "https://discord.net",
    },
    image: {
      url: "https://cdn.discordapp.com/embed/avatars/0.png",
    },
    thumbnail: {
      url: "https://cdn.discordapp.com/embed/avatars/0.png",
    },
    timestamp: new Date(),
    //.setURL("if you want one")
    fields: [
      {
        name: "1️⃣ Destiny 2",
        value: "---",
      },
      {
        name: "2️⃣ Overwatch",
        value: "---",
      },
      {
        name: "3️⃣ Apex Legends",
        value: "---",
      },
      {
        name: "4️⃣ Anthem",
        value: "---",
      }
    ]
  },
  2: { title: 'Destiny 2', description: 'Destiny 2 Options' }
};

const removeReaction = async (m, message, emoji) => {
  try { m.reactions.find(r => r.emoji.name == emoji).users.remove(message.author.id); }
  catch (err) { }
}

const awaitReactions = async (message, m, options, filter) => {
  const { min, max, page, limit } = options;

  m.awaitReactions(filter, {
    max: 1, time: 60000, errors: ['time']
  })
    .then(async (collected) => {
      const reaction = collected.first();

      if (reaction.emoji.name === "\u0031\u20E3") {
        await removeReaction(m, message, "\u0031\u20E3");

        if (page != max) {
          page = page + 1;
          await m.edit({ embed: pages[page] });
        }
        awaitReactions(msg, m, options, filter);
      }
    })

    .catch(collected => {
      console.log(`After a minute, only ${collected.size} out of 4 reacted.`);
      message.reply('No reactions in time');
    });
}
module.exports = {
  name: 'menu',
  description: 'Testing Menu Stuff',
  async execute(message) {

    //const options = {
    // limit: 15 * 1000,
    // min: 1,
    //  max: 4,
    // page: 1
    //  };

    const m = await message.channel.send({ embed: pages[options.page] });
    await m.react(reaction_numbers[1]);
    await m.react(reaction_numbers[2]);
    await m.react(reaction_numbers[3]);
    await m.react(reaction_numbers[4]);
    await m.react("❌");

    const filter = (reaction) => {
      return [
        reaction_numbers[1],
        reaction_numbers[2],
        reaction_numbers[3],
        reaction_numbers[4],
        "❌"
      ].includes(reaction.emoji.name);
    };

    awaitReactions(message, m, options, filter);


    //reaction.emoji.name === "2️⃣" ||
    // reaction.emoji.name === "3️⃣" ||
    //  reaction.emoji.name === "4️⃣" ||
    // reaction.emoji.name === "❌"
  }
};
