export = {
  name: 'avatar',
  aliases: ['icon', 'pfp'],
  description: 'Get the avatar URL of the tagged user(s), or your own avatar.',
  execute(message: { mentions: { users: { size: any; map: (arg0: (user: any) => string) => void; }; }; channel: { send: { (arg0: string): void; (arg0: any): void; }; }; author: { displayAvatarURL: any; }; }) {
    if (!message.mentions.users.size) {
      return message.channel.send(`Your avatar: ${message.author.displayAvatarURL}`);
    }

    const avatarList = message.mentions.users.map(user => {
      return `${user.username}'s avatar: ${user.displayAvatarURL}`;
    });

    message.channel.send(avatarList);
  },
};