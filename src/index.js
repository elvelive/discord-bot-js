const fs = require('fs')
const Discord = require('discord.js')
const { prefix, token } = require('../config/config.json')
const color = require('./colors')

const client = new Discord.Client()
client.commands = new Discord.Collection()

const commands = fs.readdirSync('src/commands').filter(file => file.endsWith('js'))
for (const file of commands) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}


const PREFIX = prefix;


client.once('ready', () => {
  console.log(color.fgMagenta, `\nLogged in as ${client.user.tag}!`);
  client.user.setPresence({ activity: { name: 'Hello' }, status: 'online' })
    .then(console.log(color.fgBlue, "Bot ready for action\n"))
    .catch((err) => `An error occured when trying to update bot presence, ${err}`)
})


client.on('message', (m) => {
  if (m.author.bot) return

  if (!m.author.bot && !m.content.startsWith(PREFIX)) {
    console.log(color.fgCyan, `User [${m.author.tag}] sent message: ${m.content}`)
  } else if (!m.author.bot && m.content.startsWith(PREFIX)) {
    let date = new Date()
    console.log(color.fgYellow, `${date.toLocaleDateString()} ${date.toLocaleTimeString()}: User [${m.author.tag}] called command: ${m.content.trim()}`)
  }

  const args = m.content.slice(prefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase()

  if (!client.commands.has(commandName)) return

  const command = client.commands.get(commandName)

  try {
    command.execute(m, args);
  } catch (err) {
    console.log(color.fgRed, `Error executing specified command ${command}, ${err}`)
    m.reply("There was an error trying to execute that command!")
  }
})

client.login(token)