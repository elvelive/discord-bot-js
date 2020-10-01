# Impulse discord bot
I simple bot made in Node.js for doing various basic administrative tasks on a server.

## Installation and setup instructions
### Prerequisites
`Node` and `npm` installed globally.

### Installation
1. Clone this repo.
2. Run `npm init` in root folder to download npm packages.
3. Create a `config` folder in the root folder and in it create a `config.json` file.
4. In this file, create a object with the keys `prefix` and `token`.
5. Fill in your desired prefix and your bots token.
```javascript
{
  "prefix": "prefix here",
  "token": "bot token here"
}
```
6. Run npm start in root folder and your bot should be up and running in a few seconds.

Your folder structure should look something like this when you are done:
📦discord-bot-nodejs
┣ 📂config
┃ ┗ 📜config.json
┣ 📂node_modules
┣ 📂src
 ┃ ┣ 📂commands
 ┃ ┣ 📜colors.js
 ┃ ┗ 📜index.js
 ┣ 📜.gitignore
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┗ 📜README.md