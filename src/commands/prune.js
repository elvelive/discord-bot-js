const color = require('../colors')

module.exports = {
  name: 'prune',
  description: 'Clear messages in bulk from the channel',
  args: true,
  guildOnly: true,
  execute(m, args) {
    const amount = parseInt(args[0]) + 0

    if (isNaN(amount)) {
      return m.reply('That is not a valid number.')
    } else if (amount <= 1 || amount > 100) {
      return m.reply('You need to input a number between 1 and 99.')
    }

    try {
      m.channel.bulkDelete(amount, true)
    } catch (err) {
      console.error(color.fgRed, `Error when calling command, ${err}`)
      m.channel.send(
        'There was an error trying to prune messages in this channel!'
      )
    }
    console.log(
      color.fgYellow,
      `Command &${this.name} completed successfully\n`
    )
    m.reply(`Successfully removed ${amount} messages!`)
  },
}
