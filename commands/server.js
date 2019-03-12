export const name = 'server';
export const description = 'Display info about server.';
export function execute(message) {
	message.channel.send(`This server's name is: ${message.guild.name}`);
}