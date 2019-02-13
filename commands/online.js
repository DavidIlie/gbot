const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor("#00FF00")
    .addField("Server Name", message.guild.name)
    .addField("Member Count", message.guild.memberCount);

    message.channel.send({embed});
    return;
}

module.exports.help = {
    name: "online"
}