const kick = require('../commands/kick')

module.exports = (client, message) => {
  if (msg.content === 'ping') {
    msg.reply('Pong!')
  }
  if (message.content.startsWith('!kick')) {
	  return kick(message)
  }
}