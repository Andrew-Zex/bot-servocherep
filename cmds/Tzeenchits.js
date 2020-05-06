const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    message.channel.send('Знание - сила, оберегай его!');
};
module.exports.help = {
    name: "battlecry-tzeenchits"
};