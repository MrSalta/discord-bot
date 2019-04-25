export = {
  name: 'args-info',
  description: 'Information about the arguments provided.',
  args: true,
  execute({ message, args }: {
    message: {
      channel: {
        send: {
          (arg0: string): void;
          (arg0: string): void;
        };
      };
    }; args: any[];
  }) {
    if (args[0] === 'foo') {
      return message.channel.send('bar');
    }
    message.channel.send(`First argument: ${args[0]}`);
  },
};