const { MessageEmbed } = require('discord.js')

const color = require('../colors')

module.exports = {
  name: 'help',
  description: 'All commands for the bot and general help',
  execute(m) {
    try {
      const helpEmbed = {
        color: "0099ff",
        title: "**Help**",
        description: this.description.toString(),
        fields: [
          {
            name: "\u200b",
            value: "\u200b",
            inline: false,
          },
          {
            name: "Help [&help]",
            value: "This command that you are running right now :)",
            inline: false,
          },
          {
            name: "Prune [&prune <1-99>]",
            value: "Clears between 1 and 99 messages in a channel",
            inline: false,
          },
          {
            name: "Server [&server]",
            value: "Replies with details about the server that the bot is running on",
            inline: false,
          },
          {
            name: "User info [&user-info <@user>]",
            value: "Displays info about a tagged user",
            inline: false,
          },

          /*{
            name: "",
            value: "",
            inline: false,
          },*/
        ],
        footer: {
          text: "Powered by Impulse",
        },
      };
      m.channel.send({ embed: helpEmbed })
    } catch (err) {
      console.log(color.fgRed,)
    }
  }
}