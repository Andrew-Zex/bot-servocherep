const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    message.channel.send('За дедушку Нургла!');
};
module.exports.help = {
    name: "battlecry-nurgle"
};