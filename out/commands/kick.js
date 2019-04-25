"use strict";
module.exports = {
    name: 'kick',
    description: 'Tag a member and kick them (but not really).',
    guildOnly: true,
    execute: function (message) {
        if (!message.mentions.users.size) {
            return message.reply('you need to tag a user in order to kick them!');
        }
        var taggedUser = message.mentions.users.first();
        message.channel.send("You wanted to kick: " + taggedUser.username);
    },
};
//# sourceMappingURL=kick.js.map