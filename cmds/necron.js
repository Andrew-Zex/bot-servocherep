const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    message.channel.send('Уничтожим мешки с мясом!');
};
module.exports.help = {
    name: "battlecry-necron"
};