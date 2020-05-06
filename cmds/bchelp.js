const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    message.channel.send('**---"боевые кличи сервера"---**');
    message.channel.send('**1) battlecry-tzeentch - боевой клич Тзинчитов**');
    message.channel.send('**2) battlecry-khorne - боевой клич Кхорнитов**');
    message.channel.send('**3) battlecry-nurgle - боевой клич Нурглитов**');
    message.channel.send('**4) battlecry-imperium - боевой клич  Империума**');
    message.channel.send('**5) battlecry-slaanesh - боевой клич Слаанешитов**');
    message.channel.send('**6) battlecry-lizardmen - боевой клич Людоящеров**');
    message.channel.send('**7) battlecry-necron - боевой клич Некронов**');

};
module.exports.help = {
    name: "bchelp"
};