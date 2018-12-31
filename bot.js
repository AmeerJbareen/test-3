const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("498904386471198721")
setInterval(function() {
channel.send(`الطوارئ هنآالطوارئ هنآالطوارئ هنآالطوارئ هنآالطوارئ هنآالطوارئ هنآالطوارئ هنآالطوارئ هنآالطوارئ هنآالطوارئ هنآ`);
}, 30)
})

client.login(process.env.BOT_TOKEN);