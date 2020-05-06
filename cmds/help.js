const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    message.channel.send('**---команды бота---**');
    message.channel.send('**1) say - (only admins) пишет сообщение от имини бота**');
    message.channel.send('**2) help - вызывает это сообщение**');
    message.channel.send('**3) clear [кол-во сообщений] -(only admins) удаляет сообщения**');
    message.channel.send('**4) creators - вызыввает сообщение о тех кто помогал или создавал бота(грубо говоря контакты)**');
    message.channel.send('**5) userinfo (упоминание пользователя) - выдаёт некоторую инфу о человеке/боте**');
    message.channel.send('**6) serverinfo - выдаёт сообщение о сервере**');
    message.channel.send('**7) warn [user] - (only admins, дорабатывается) выдаёт варн пользователю**');
    message.channel.send('**8) unwarn [user] - (only admins, дорабатывается) забирает варн у пользователя**');
    message.channel.send('**9) mute [user] [time] - (only admins) выдаёт мут пользователю**');
    message.channel.send('**10) unmute [user] - (only admins) забирает мут у пользователя**');
    message.channel.send('**11) kick [user] - (only admins) кикает пользователя**');
    message.channel.send('**12) ban [user] - (only admins) банит пользователя(просьба админам скидывать причину и пруфы в #пруфы-бана-и-кика )** ');
    message.channel.send('**13) test - запускает проверку роботоспособности бота**');
    message.channel.send('**14) bchelp - выдаёт список команд боевых кличей**');
};
module.exports.help = {
    name: "help"
};