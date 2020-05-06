const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    message.channel.send('Совершенство или Смерть');
};
module.exports.help = {
    name: "battlecry-slaanesh"
};