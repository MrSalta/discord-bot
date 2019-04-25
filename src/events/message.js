import kick from '../commands/kick';

export default (client, message) => {
  if (message.content.startsWith(`${prefix}kick`)) {
    return kick(message)
  }
}