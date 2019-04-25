module.exports = {
    name: 'ping',
    cooldown: 5,
    description: 'Ping!',
    execute: function (message) {
        message.channel.send('Pong.');
    },
};
