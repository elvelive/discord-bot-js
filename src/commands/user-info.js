const color = require('../colors')

module.exports = {
  name: "user-info",
  description: "Displays basic info about the tagged user",
  execute(m, args) {
    if (!m.mentions.users.size) return m.reply("you need to tag a user")

    const taggedUser = m.mentions.users.first()

    try {
      m.channel
        .send(`Username: ${taggedUser.username}\nJoined server: ${taggedUser.createdAt.toLocaleDateString()}`)
    }
    catch (err) {
      console.log(color.fgRed, `Error when calling command, ${err}`)
    }
    console.log(color.fgYellow, "Command &user-info completed successfully\n")
  },
}
