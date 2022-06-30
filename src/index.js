const { Client, Intents } = require('discord.js');

//import * as dotenv from "dotenv";
//dotenv.config()
require('dotenv').config()

const client = new Client ({ intents: [Intents.FLAGS.GUILDS]});

client.once('ready', () =>{
  console.log('Ready!');
});

client.login(process.env.DISCORD_TOKEN)