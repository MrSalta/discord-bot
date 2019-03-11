module.exports = {
	name: 'server',
	description: 'Display info about server.',
	execute(message) {
		message.channel.send(`This server's name is: ${message.guild.name}`);
	},
};