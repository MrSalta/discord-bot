module.exports = {
    name: 'avatar',
    aliases: ['icon', 'pfp'],
    description: 'Get the avatar URL of the tagged user(s), or your own avatar.',
    execute: function (message) {
        if (!message.mentions.users.size) {
            return message.channel.send("Your avatar: " + message.author.displayAvatarURL);
        }
        var avatarList = message.mentions.users.map(function (user) {
            return user.username + "'s avatar: " + user.displayAvatarURL;
        });
        message.channel.send(avatarList);
    },
};
