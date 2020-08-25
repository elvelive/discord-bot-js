require('dotenv').config()

const Discord = require('discord.js')
const client = new Discord.Client()
const PREFIX = "&";

client.once('ready', () => {
  console.log("\x1b[35m%s\x1b[35m", `\nLogged in as ${client.user.tag}!`)
})

client.on('message', (message) => {
  if (message.author.bot) return;
  if (!message.author.bot && !message.content.startsWith(PREFIX)) {
      console.log(
        "\x1b[36m%s\x1b[36m",
        `\nUser [${message.author.tag}] sent message: ${message.content}`)
  } else if (!message.author.bot && message.content.startsWith(PREFIX)) {
    console.log(
      "\x1b[33m%s\x1b[33m",
      `\n${Date()} User [${message.author.tag}] called command: ${message.content.trim()}`
    );
  }

  if (message.content.startsWith(PREFIX)) {
    const [CMD, ...args] = message.content
      .trim()
      .substring(PREFIX.length)
      .split(/\s+/)


    switch (CMD) {
      case "kick":
        message.channel.send("User kick")
    }
  }

})

client.login(process.env.BOT_TOKEN);
