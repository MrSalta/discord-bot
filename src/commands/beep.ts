export = {
	name: 'beep',
	description: 'Beep!',
	execute(message: { channel: { send: (arg0: string) => void; }; }) {
		message.channel.send('Boop.');
	},
};