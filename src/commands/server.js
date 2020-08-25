const color = require('../colors')

module.exports = {
  name: "server",
  description: "Displays info about the server",
  execute(m) {
    m.channel
      .send(`Server name: ${m.guild.name}\nTotal members: ${m.guild.memberCount}\nCurrent owner: ${m.guild.owner}`)
      .catch((err) => console.log(fgRed, `Error when calling command, ${err}`))
      .then(console.log(color.fgYellow, "Command &server completed successfully"))
  },
}
