const Discord = require("discord.js");
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var request = new XMLHttpRequest();

module.exports.run = async (bot, message, args) => {
    request.open('GET', 'https://davidilie.com/api/spring/statistics', true);
    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        var data = JSON.parse(request.responseText);
        let statsEmbed = new Discord.RichEmbed()
        .setAuthor("Albastru on YouTube")
        .setColor("0000FF")
        .addField("Subscribers", data.subscribers, true)
        .addField("Views", data.views, true)
        .addField("Videos", data.videos)
        .setFooter(" © GBot", bot.user.avatarURL)
        .setTimestamp();

        message.channel.send(statsEmbed);
      }
    }
    request.send();

    return;
}

module.exports.help = {
    name: "albastru"
}
