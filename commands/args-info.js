export const name = 'args-info';
export const description = 'Information about the arguments provided.';
export const args = true;
export function execute(message, args) {
  if (args[0] === 'foo') {
    return message.channel.send('bar');
  }
  message.channel.send(`First argument: ${args[0]}`);
}
