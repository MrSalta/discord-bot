const kick = require('../commands/kick')

module.exports = (client, message) => {
  if (message.content === `${prefix}ping`) {
    message.reply('Pong!')
  }
  if (message.content.startsWith(`${prefix}kick`)) {
	  return kick(message)
  }
}