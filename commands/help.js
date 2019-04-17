const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let embed = new Discord.RichEmbed()
    .setTitle("Help")
    .setColor("#0000FF")
    .addField("!8ball", "Virtual 8ball")
    .addField("!ban", "Bans players. Usage: !ban <@user> (need the manage messages permission)")
    .addField("!botinfo", "Displays information about GBot")
    .addField("!clear", "Clears the chat. Usage: !clear 20 (need the manage messages permission)")
    .addField("!coins", "Shows how many coins you have")
    .addField("!fortnite", "Shows fortnite stats for modes solo, duo, squad (the modes need to be spelt like I worte before)")
    .addField("!help", "Displays this very message")
    .addField("!kick", "Kicks players. Usage: !kick <@username> (need the manage messages permission)")
    .addField("!pay", "Pay people your amount of coins. Usage: !pay <@username> <amount>")
    .addField("!ping", "Return pong and shows the bot's latency and API latency")
    .addField("!report", "Reports players. Usage: !report <@username> <reason>")
    .addField("!say", "Makes the bot say what you want. Usage: !say <message> (need the permission manage messages)")
    .addField("!serverinfo", "Displays server information")
    .addField("!tempmute", "Mutes a person for a selected amount of time. Usage: !tempmute <@username> <time> (need the manage messages permission)")
    .addField("!userinfo", "Displayed user information on the specified user. Usage: !userinfo <@username>")
    .addField("!online", "Shows the name of the server and the total list of members")
    .addField("!random", "Picks a random number. Usage !random <number> <number>");

    message.channel.send(embed);

    return;
}

module.exports.help = {
    name: "help"
}
