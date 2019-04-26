"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@yamdbf/core");
const path = require("path");
require("./lib/env");
class CustomClient extends core_1.Client {
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
//# sourceMappingURL=akari.js.map