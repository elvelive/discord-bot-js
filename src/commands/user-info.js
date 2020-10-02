const color = require('../colors')

module.exports = {
  name: 'user-info',
  description: 'Displays basic info about the tagged user',
  args: true,
  guildOnly: true,
  execute(m) {
    if (!m.mentions.users.size) return m.reply('you need to tag a valid user')

    let taggedUser = m.mentions.users.first()
    let user = m.guild.member(taggedUser)

    try {
      const userEmbed = {
        color: '0099ff',
        title: '**User Info**',
        description: this.description.toString(),
        fields: [
          {
            name: 'Username: ',
            value: taggedUser.username,
            inline: true,
          },
          {
            name: 'Tag: ',
            value: `#${taggedUser.discriminator}`,
            inline: true,
          },
          {
            name: '\u200b',
            value: '\u200b',
            inline: false,
          },
          {
            name: 'Joined Discord: ',
            value: taggedUser.createdAt.toLocaleDateString(),
            inline: true,
          },
          {
            name: 'Joined this server: ',
            value: user.joinedAt.toLocaleDateString(),
            inline: true,
          },
        ],
        footer: {
          name: 'Powered by Impulse',
        },
      }
      m.channel.send({ embed: userEmbed })
    } catch (err) {
      console.error(color.fgRed, `Error when calling command, ${err}`)
    }
    console.log(color.fgYellow, 'Command &user-info completed successfully\n')
  },
}
