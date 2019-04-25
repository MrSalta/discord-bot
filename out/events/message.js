"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var kick_1 = require("../commands/kick");
exports.default = (function (client, message) {
    if (message.content.startsWith(prefix + "kick")) {
        return kick_1.default(message);
    }
});
//# sourceMappingURL=message.js.map