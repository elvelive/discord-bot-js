const color = require('../colors')

module.exports = {
  name: "prune",
  description: "Clear messages from the channel",
  args: true,
  usage: "<number greater than 0, less than 100>",
  execute(m, args) {
    const amount = parseInt(args[0]) + 0

    if (isNaN(amount)) {
      return m.reply('That is not a valid number.')
    } else if (amount <= 1 || amount > 100) {
      return m.reply('You need to input a number between 1 and 99.')
    }

    try {
      m.channel.bulkDelete(amount, true)
        .catch((err) => {
          console.error(err)
          m.channel.send(
            'There was an error trying to prune messages in this channel!'
          )
        })
    } catch (err) {
      console.log(color.fgRed, `Error when calling command, ${err}`)
    }
    console.log(color.fgYellow, `Command &${this.name} completed successfully\n`)
    m.reply(`Successfully removed ${amount} messages!`)
  }
}
