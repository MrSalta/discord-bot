export const name = 'beep';
export const description = 'Beep!';
export function execute(message) {
	message.channel.send('Boop.');
}