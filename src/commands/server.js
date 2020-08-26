const color = require('../colors')

module.exports = {
  name: "server",
  description: "Displays info about the server",
  execute(m) {
    try {
      m.channel
        .send(`Server name: ${m.guild.name}\nTotal members: ${m.guild.memberCount}\nCurrent owner: ${m.guild.owner}`)
    } catch (err) {
      console.log(fgRed, `Error when calling command, ${err}`)
      m.reply(`Error when calling command ${name}`)
    }
    console.log(color.fgYellow, "Command &server completed successfully\n")
  },
}
