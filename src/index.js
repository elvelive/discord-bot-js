const Discord = require('discord.js')
const config = require('../config/config.json')


const PREFIX = config.prefix;

// ANSI colors
const fgRed = "\x1b[31m%s\x1b[0m";
const fgYellow = "\x1b[33m%s\x1b[0m"
const fgBlue = "\x1b[34m%s\x1b[0m"
const fgMagenta = "\x1b[35m%s\x1b[0m"
const fgCyan = "\x1b[36m%s\x1b[0m"


const client = new Discord.Client();

client.once('ready', () => {
  console.log(fgMagenta, `\nLogged in as ${client.user.tag}!`)
  client.user.setPresence({ activity: { name: 'Hello' }, status: 'online' })
    .then(console.log(fgBlue, "Bot ready for action\n"))
    .catch((err) => `An error occured when trying to update bot presence, ${err}`)
})


client.on('message', (m) => {
  if (m.author.bot) return;

  if (!m.author.bot && !m.content.startsWith(PREFIX)) {
    console.log(fgCyan, `User [${m.author.tag}] sent message: ${m.content}`)
  } else if (!m.author.bot && m.content.startsWith(PREFIX)) {
    let date = new Date()
    console.log(fgYellow, `${date.toLocaleDateString()} ${date.toLocaleTimeString()}: User [${m.author.tag}] called command: ${m.content.trim()}`)
  }

  if (m.content.startsWith(PREFIX)) {
    const [CMD, ...args] = m.content
      .trim()
      .substring(PREFIX.length)
      .split(/\s+/)
      .catch((err) => console.log(`Error when handling or parsing command, ${err}`))

    switch (CMD) {
      case "server":
        m.channel
          .send(`Server name: ${m.guild.name}\nTotal members: ${m.guild.memberCount}\nCurrent owner: ${m.guild.owner}`)
          .catch((err) => console.log(fgRed, `Error when calling command, ${err}`))
          .then(console.log(fgYellow, "Command &server completed successfully"))
        break
      case "user-info":
        m.channel
          .send(`Your username: ${m.author.toString()}`)
          .catch((err) => console.log(fgRed, `Error when calling command, ${err}`))
          .then(console.log(fgYellow, "Command &user-info completed successfully"))
        break
      default:
        m.channel
          .catch((err) => console.log(fgRed, `Error when calling command, ${err}`))
          .send("Not a valid command!")
        break
    }
  }
})

client.login(config.token)