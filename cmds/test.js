const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    message.channel.send('Starting test');
    message.channel.send('25%');
    message.channel.send('50%');
    message.channel.send('75%');
    message.channel.send('100%');
    message.channel.send('Testing complete!');
};
module.exports.help = {
    name: "test"
};