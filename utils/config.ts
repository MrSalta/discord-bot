import * as dotenv from 'dotenv';

dotenv.config();
let path;
switch (process.env.BOT_TOKEN) {
    default:
        path = `${__dirname}/../../.env`;
}
dotenv.config({ path: path });

export const BOT_TOKEN = process.env.BOT_TOKEN;