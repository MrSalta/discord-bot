"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@yamdbf/core");
const discord_js_1 = require("discord.js");
const Discord = require("discord.js");
class default_1 extends core_1.Command {
    constructor() {
        super({
            name: 'info',
            desc: 'Bot information',
            usage: '<prefix>info',
            group: 'base',
        });
    }
    action(message, args) {
        const embed = new discord_js_1.MessageEmbed()
            .setColor(11854048)
            .setAuthor(`${this.client.user.username} Info`, this.client.user.avatarURL())
            .addField('Mem Usage', `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
            .addField('Uptime', core_1.Time.difference(this.client.uptime * 2, this.client.uptime).toString(), true)
            .addField('\u200b', '\u200b', true)
            .addField('Servers', this.client.guilds.size.toString(), true)
            .addField('Channels', this.client.channels.size.toString(), true)
            .addField('Users', this.client.guilds.map((g) => g.memberCount).reduce((a, b) => a + b), true)
            .addField('YAMDBF', `v${core_1.version}`, true)
            .addField('Discord.js', `v${Discord.version}`, true)
            .addField('\u200b', '\u200b', true)
            .addField('Source', '[Available on GitHub](https://github.com/zajrik/pickle-mod)', true)
            .addField('Support', '[Server Invite](https://discord.gg/CW48Pkp)', true)
            .addField('Invite Me', `[Click here](https://discordapp.com/oauth2/authorize`
            + `?permissions=297888791&scope=bot&client_id=${this.client.user.id})`, true)
            .addField('\u200b', `Be sure to use the \`guide\` command for information `
            + `on setting up your server for moderation! The default prefix for commands is \`-\`. `
            + `You can change this with the \`setprefix\` command.\n\nIf you ever forget the command prefix, `
            + `just use \`@${this.client.user.tag} prefix\`.`)
            .setFooter('Pickle', this.client.user.avatarURL())
            .setTimestamp();
        message.channel.send({ embed });
    }
}
exports.default = default_1;
//# sourceMappingURL=info.js.map