const color = require('../colors')

module.exports = {
  name: "user-info",
  description: "Displays info about user that called the function",
  execute(m, args) {
    m.channel
      .send(`Your username: ${m.author.toString()}`)
      .catch((err) => console.log(color.fgRed, `Error when calling command, ${err}`))
      .then(console.log(color.fgYellow, "Command &user-info completed successfully"))
  },
};
