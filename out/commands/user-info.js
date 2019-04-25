"use strict";
module.exports = {
    name: 'user-info',
    description: 'Display info about yourself.',
    execute: function (message) {
        message.channel.send("Your username: " + message.author.username + "\nYour ID: " + message.author.id);
    },
};
//# sourceMappingURL=user-info.js.map