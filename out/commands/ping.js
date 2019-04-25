"use strict";
module.exports = {
    name: 'ping',
    cooldown: 5,
    description: 'Ping!',
    execute: function (message) {
        message.channel.send('Pong.');
    },
};
//# sourceMappingURL=ping.js.map