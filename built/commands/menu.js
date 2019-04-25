var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Discord = require('discord.js');
var gameChoice;
// Declare reaction emojis so I don't have to remember their unicode values
var reaction_numbers = [
    '\u0030\u20E3',
    '\u0031\u20E3',
    '\u0032\u20E3',
    '\u0033\u20E3',
    '\u0034\u20E3',
    '\u0035\u20E3',
    '\u0036\u20E3',
    '\u0037\u20E3',
    '\u0038\u20E3',
    '\u0039\u20E3'
];
// Top Menu (Choose your game)
var gameMenu = new Discord.RichEmbed()
    .setColor('#253b56')
    .setTitle('Game Menu')
    .setURL('http://www.example.com')
    .setDescription('description')
    .setThumbnail('https://cdn.discordapp.com/embed/avatars/0.png')
    .addField('Regular field title', 'Some value here')
    .addBlankField()
    .addField('1️⃣ Destiny 2', '--', true)
    .addField('2️⃣ Overwatch', '--', true)
    .addField('3️⃣ Apex Legends', '--', true)
    .addField('4️⃣ Anthem', '--', true)
    .setImage('https://cdn.discordapp.com/embed/avatars/0.png')
    .setTimestamp()
    .setFooter('Some footer text here', 'https://cdn.discordapp.com/embed/avatars/0.png');
// Menu 2 - Destiny 2
var destinyMenu = new Discord.RichEmbed()
    .setColor('#346f41')
    .setTitle('Destiny Menu')
    .setURL('http://www.example.com')
    .setDescription('d2 description')
    .setThumbnail('https://alternative.me/icons2/destiny.png')
    .addField('Regular field title', 'Some value here')
    .addBlankField()
    .addField('1️⃣ Gambit', '--', true)
    .addField('2️⃣ Strikes', '--', true)
    .addField('3️⃣ Raid', '--', true)
    .addField('4️⃣ Crucible', '--', true)
    .setImage('https://cdn.discordapp.com/embed/avatars/0.png')
    .setTimestamp()
    .setFooter('Some footer text here', 'https://cdn.discordapp.com/embed/avatars/0.png');
// How to make a Discord channel
function makeChannel(message) {
    message.guild.createChannel('event-maker', {
        type: 'text',
        options: [{
                parent_id: '569022073133989900'
            }]
    })
        .then(function (channel) {
        // Then put it in the right group
        // const category = message.guild.channels.find(c => c.name == 'event-channels' && c.type == 'category');
        // channel.setParent(category.id)
        // .then(() =>
        // Then apply the group permissions
        channel.lockPermissions()
            .then(function () {
            console.log("Permissions syncd! Also that string: " + channel.id + " ");
        })
            .catch(console.error)
            .catch(console.error);
        channel.send('Channel active');
        return channel;
    })
        .catch(console.error);
}
module.exports = {
    name: 'menu',
    description: 'Testing Menu Stuff',
    execute: function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var newCh, m_1, filter, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Delete the command message
                        message.delete();
                        // Create the channel
                        makeChannel(message);
                        newCh = makeChannel();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 8, , 9]);
                        return [4 /*yield*/, message.guild.channels.find('id', "\"" + newCh + "\"").send(gameMenu)];
                    case 2:
                        m_1 = _a.sent();
                        // Add reactions to make the menu
                        return [4 /*yield*/, m_1.react(reaction_numbers[1])];
                    case 3:
                        // Add reactions to make the menu
                        _a.sent();
                        return [4 /*yield*/, m_1.react(reaction_numbers[2])];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, m_1.react(reaction_numbers[3])];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, m_1.react(reaction_numbers[4])];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, m_1.react('❌')];
                    case 7:
                        _a.sent();
                        console.log("Reactions set for gameMenu. Also, " + newCh);
                        filter = function (reaction, user) {
                            return [
                                reaction_numbers[1],
                                reaction_numbers[2],
                                reaction_numbers[3],
                                reaction_numbers[4],
                                '❌',
                            ].includes(reaction.emoji.name) && user.id === message.author.id;
                        };
                        // Start looking for reactions
                        m_1.awaitReactions(filter, {
                            max: 1, time: 60000, errors: ['time'],
                        })
                            .then(function (collected) {
                            var reaction = collected.first();
                            // Destiny 2 Selected
                            if (reaction.emoji.name === '\u0031\u20E3') {
                                reaction.remove(reaction.users.filter(function (u) { return u === message.author; }).first());
                                gameChoice = 'Destiny 2';
                                message.guild.channels.find('name', 'event-maker').send('Destiny 2 Selected');
                                console.log(message.author.username + " chose " + gameChoice);
                                m_1.edit(destinyMenu);
                            }
                        })
                            .catch(function (collected) {
                            // Timeout message
                            console.log("After a minute, only " + collected.size + " out of 4 reacted.");
                        });
                        return [3 /*break*/, 9];
                    case 8:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [3 /*break*/, 9];
                    case 9: return [2 /*return*/];
                }
            });
        });
    },
};