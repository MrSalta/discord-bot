import { Client, Message } from '@yamdbf/core';
import * as Discord from 'discord.js';
import * as config from '../src/config.json';
import * as path from 'path';
import './lib/env';

class CustomClient extends Client {
    constructor() {
        super({
            token: process.env.BOT_TOKEN,
            readyText: 'Ready!',
            commandsDir: path.join(__dirname, 'commands'),
            pause: true,
        });

        this.once('pause', async () => {
            await this.setDefaultSetting('prefix', '!ak ');
            this.continue();
        });
        this.once('clientReady', () => {
            console.log('Client ready!');
        });
    }
}
const client = new CustomClient().start();