const color = require('../colors')
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "server",
  description: "Displays info about the server",
  execute(m) {
    try {
      const embed = new MessageEmbed()
        .setColor('#0099ff')

        .setTitle('**User Info**')
        .setDescription(this.description.toString())
        .addField('\u200b', '\u200b')

        .addFields(
          { name: 'Server name: ', value: m.guild.name, inline: true },
          { name: 'Member count: ', value: m.guild.memberCount, inline: true }
        )
        .addField('\u200b', '\u200b')
        .addFields(
          { name: 'Current owner: ', value: m.guild.owner, inline: true },
          { name: 'Server created: ', value: m.guild.createdAt.toLocaleDateString(), inline: true }
        )

        .setFooter('Powered by Impulse')
      m.channel.send(embed)
    } catch (err) {
      console.log(fgRed, `Error when calling command, ${err}`)
      m.reply(`Error when calling the command!`)
    }
    console.log(color.fgYellow, 'Command &server completed successfully\n')
  },
}
