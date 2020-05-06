const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    message.channel.send('Кровь богу крови! Черепа для трона черепов!');
};
module.exports.help = {
    name: "battlecry-khorne"
};