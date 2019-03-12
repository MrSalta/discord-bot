export const name = 'user-info';
export const description = 'Display info about yourself.';
export function execute(message) {
  message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
}
