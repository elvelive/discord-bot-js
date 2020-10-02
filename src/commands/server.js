const color = require('../colors')

module.exports = {
  name: 'server',
  description: 'Displays info about the server',
  args: false,
  execute(m) {
    try {
      const serverEmbed = {
        color: '0099ff',
        title: '**Server Info**',
        description: this.description.toString(),
        fields: [
          {
            name: '\u200b',
            value: '\u200b',
            inline: false,
          },
          {
            name: 'Server name: ',
            value: m.guild.name,
            inline: true,
          },
          {
            name: 'Member count: ',
            value: m.guild.memberCount,
            inline: true,
          },
          {
            name: '\u200b',
            value: '\u200b',
            inline: false,
          },
          {
            name: 'Current owner: ',
            value: m.guild.owner,
            inline: true,
          },
          {
            name: 'Server created: ',
            value: m.guild.createdAt.toLocaleDateString(),
            inline: true,
          },
        ],
        footer: {
          name: 'Powered by Impulse',
        },
      }

      m.channel.send({ embed: serverEmbed })
    } catch (err) {
      console.error(color.fgRed, `Error when calling command, ${err}`)
    }
    console.log(color.fgYellow, 'Command &server completed successfully\n')
  },
}
