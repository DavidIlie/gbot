// ON PART 20 MIN 1:47!!!!

const Discord = require("discord.js");
const config = require("../botconfig.json")
const Client = require("fortnite");
const fortnite = new Client("24f30f6a-4779-4e75-a0ed-098ae38bed45");

module.exports.run = async (bot, message, args) => {

    let username = args[0];
    let platform = args[2] || "pc";
    let gamemode = args[1];

    if(gamemode != 'solo' && gamemode != 'duo' && gamemode != 'squad' && gamemode != 'lifetime') return message.reply("Usage: !fortnite <username> <mode> <platform>");


    if(!username) return message.reply("Please provide a username.")

    let data = fortnite.user(username, platform).then(data => {
        let stats = data.stats;

        if(gamemode === 'solo'){
            let solostats = stats.solo;
            let score = solostats.score;
            let kd = solostats.kd;
            let matches = solostats.matches;
            let kills = solostats.kills;
            let wins = solostats.wins;
            let top3 = solostats.top_3;

            let embed = new Discord.RichEmbed()
            .setAuthor(data.username)
            .setTitle("Fortnite Lifetime Solo Stats")
            .setColor("#0000FF")
            .addField("Wins", wins, true)
            .addField("Top 3s", top3, true)
            .addField("Kills", kills, true)
            .addField("Kill/Death Ratio", kd, true)
            .addField("Lifetime Score", score, true)
            .addField("Matches Played", matches, true);
    
            message.channel.send(embed);
        }else if (gamemode === 'duo'){
            let duostats = stats.duo;
            let score = duostats.score;
            let kd = duostats.kd;
            let matches = duostats.matches;
            let kills = duostats.kills;
            let wins = duostats.wins;
            let top3 = duostats.top_3;

            let embed = new Discord.RichEmbed()
            .setAuthor(data.username)
            .setTitle("Fortnite Lifetime Duos Stats")
            .setColor("#0000FF")
            .addField("Wins", wins, true)
            .addField("Top 3s", top3, true)
            .addField("Kills", kills, true)
            .addField("Kill/Death Ratio", kd, true)
            .addField("Lifetime Score", score, true)
            .addField("Matches Played", matches, true);
    
            message.channel.send(embed);
        }else if (gamemode === 'squad'){
            let squadstats = stats.squad;
            let score = squadstats.score;
            let kd = squadstats.kd;
            let matches = squadstats.matches;
            let kills = squadstats.kills;
            let wins = squadstats.wins;
            let top3 = squadstats.top_3;

            let embed = new Discord.RichEmbed()
            .setAuthor(data.username)
            .setTitle("Fortnite Lifetime Squad Stats")
            .setColor("#0000FF")
            .addField("Wins", wins, true)
            .addField("Top 3s", top3, true)
            .addField("Kills", kills, true)
            .addField("Kill/Death Ratio", kd, true)
            .addField("Lifetime Score", score, true)
            .addField("Matches Played", matches, true);
    
            message.channel.send(embed);
        }else{

        let lifetime = stats.lifetime;
        let score = lifetime[6]["Score"]
        let mplayed = lifetime[7]["Matches Played"]
        let wins = lifetime[8]["Wins"]
        let winper = lifetime[9]["Win%"]
        let kills = lifetime[10]["Kills"]
        let kd = lifetime[11]["K/d"]

        let embed = new Discord.RichEmbed()
        .setAuthor(data.username)
        .setTitle("Fortnite Lifetime Stats")
        .setColor("#0000FF")
        .addField("Wins", wins, true)
        .addField("Win Percentage", winper, true)
        .addField("Kills", kills, true)
        .addField("Kill/Death Ratio", kd, true)
        .addField("Lifetime Score", score, true)
        .addField("Matches Played", mplayed, true);

        message.channel.send(embed);

        }
    });

}

module.exports.help = {
    name: "fortnite"
}