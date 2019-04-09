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

module.exports = {
    name: 'destiny',
    description: 'Destiny 2 Activity Menu',
    async execute(message) {

        const d2 = await message.author.send(destinyMenu)
        await d2.react(reaction_numbers[1]);
        await d2.react(reaction_numbers[2]);
        await d2.react(reaction_numbers[3]);
        await d2.react(reaction_numbers[4]);
        await d2.react("❌");

        const filter = (reaction, user) => {
            return [
                reaction_numbers[1],
                reaction_numbers[2],
                reaction_numbers[3],
                reaction_numbers[4],
                "❌"
            ].includes(reaction.emoji.name) && user.id === message.author.id;
        };

        d2.awaitReactions(filter, {
            max: 1, time: 60000, errors: ['time']
        })
            .then(collected => {
                const reaction = collected.first();

                if (reaction.emoji.name === "\u0031\u20E3") {
                    reaction.remove(reaction.users.filter(u => u === message.author).first());
                    message.reply('You chose Destiny 2');
                    console.log(`${message.author} chose Destiny 2`);
                    d2.edit(destinyMenu);
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