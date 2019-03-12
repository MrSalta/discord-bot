export const name = 'ping';
export const description = 'Ping!';
export function execute(message, args) {
	message.channel.send('Pong.');
}