module.exports = {
    name: 'beep',
    description: 'Beep!',
    execute: function (message) {
        message.channel.send('Boop.');
    },
};
