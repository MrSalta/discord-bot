"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@yamdbf/core");
class Boop extends core_1.Command {
    constructor() {
        super({
            name: 'boop',
            desc: 'Beep!',
            usage: '<prefix>boop',
        });
    }
    async action(message, args) {
        message.reply('Beep!');
    }
}
exports.default = Boop;
//# sourceMappingURL=boop.js.map