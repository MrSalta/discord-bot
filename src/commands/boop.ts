import { Command, Message } from '@yamdbf/core';

export default class Boop extends Command {
    public constructor() {
        super({
            name: 'boop',
            desc: 'Beep!',
            usage: '<prefix>boop',
        });
    }
    public async action(message: Message, args) {
        message.reply('Beep!');
    }
}
