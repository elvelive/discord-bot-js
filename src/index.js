require('dotenv').config()

const Discord = require('discord.js')

const client = new Discord.Client()

const PREFIX = "&";

// Colors
const fgYellow = "\x1b[33m%s\x1b[33m"
const fgMagenta = "\x1b[35m%s\x1b[35m"
const fgCyan = "\x1b[36m%s\x1b[36m"


// Init
client.once('ready', () => {
  console.log(fgMagenta, `\nLogged in as ${client.user.tag}!`)
})


client.on('message', (message) => {
  if (message.author.bot) return;
  if (!message.author.bot && !message.content.startsWith(PREFIX)) {
      console.log(
        fgCyan,
        `\nUser [${message.author.tag}] sent message: ${message.content}`)
  } else if (!message.author.bot && message.content.startsWith(PREFIX)) {
    console.log(
      fgYellow,
      `\nUser [${message.author.tag}] called command: ${message.content.trim()}`
    );
  }

  if (message.content.startsWith(PREFIX)) {
    const [CMD, ...args] = message.content
      .trim()
      .substring(PREFIX.length)
      .split(/\s+/)


    switch (CMD) {
      case "server":
        message.channel
          .send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}\nCurrent owner: ${message.guild.owner}`)
          .then(console.log(fgYellow, "Command &server completed successfully"))
        break;
      case "user-info":
        message.channel
          .send(`Your username: ${message.author.toString()}`)
          .then(console.log(fgYellow, "Command &user-info completed successfully"))
        break;
      default:
        message.channel.send("Not a valid command!")
    }
  }
})

client.login(process.env.BOT_TOKEN);
