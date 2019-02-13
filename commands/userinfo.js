const Discord = require("discord.js");
const moment = require("moment");
const bot = new Discord.Client({disableEveryone: true})

module.exports.run = async (bot, message, args) => {
    let user;
    if(message.mentions.users.first()) {
        user = message.mentions.users.first();
    } else {
        user = message.author;
    }

    const member = message.guild.member(user);

    const embed = new Discord.RichEmbed()
    .setColor("00FF00")
    .setTitle(`${user.username}#${user.discriminator}`)
    .addField("Joined server at:", `${moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`, true)
    .addField("Status:", `${user.presence.status}`, true)
    .addField("Game:", `${user.presence.game ? user.presence.game.name : `None`}`, true)
    .addField("Roles", member.roles.map(roles => `${roles.name}`).join(`, `), true);
    message.channel.send({embed});
    return;
}

module.exports.help = {
    name: "userinfo"
}