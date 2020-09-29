const color = require('../colors.js')
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "user-info",
  description: "Displays basic info about the tagged user",
  execute(m) {
    if (!m.mentions.users.size) return m.reply("you need to tag a valid user")

    let taggedUser = m.mentions.users.first()
    let user = m.guild.member(taggedUser)

    try {
      const embed = new MessageEmbed()
        .setColor('#0099ff')

        .setTitle('**User Info**')
        .setDescription(this.description.toString())
        .addField('\u200b', '\u200b')

        .addFields(
          { name: 'Username: ', value: taggedUser.username, inline: true },
          { name: 'Tag: ', value: `#${taggedUser.discriminator}`, inline: true }
        )
        .addField('\u200b', '\u200b')
        .addFields(
          { name: 'Joined Discord: ', value: taggedUser.createdAt.toLocaleDateString(), inline: true },
          { name: 'Joined this server: ', value: user.joinedAt.toLocaleDateString(), inline: true }
        )

        .setFooter('Powered by Impulse')
      m.channel.send(embed)
    }
    catch (err) {
      console.log(color.fgRed, `Error when calling command, ${err}`)
    }
    console.log(color.fgYellow, "Command &user-info completed successfully\n")
  },
}
