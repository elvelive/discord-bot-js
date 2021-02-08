# Impulse discord bot
A basic bot made in JavaScript for doing various basic administrative tasks on a server.<br>
*This is supposed to be seen as a template and starter project, not a fully fledged moderation bot.*

## Installation and setup instructions
### Prerequisites
`Node` and `npm` installed globally.

### Installation
1. Clone this repo.
2. Run `npm i`, `(npm install)`, in root folder to download npm packages.
3. Create a `config` folder in the root folder and in it create a `config.json` file.
4. In this file, create a object with the keys `prefix` and `token`.
5. Fill in your desired prefix and your bots token.
```javascript
{
  "prefix": "prefix here",
  "token": "bot token here"
}
```
6. Run `npm start` in root folder and your bot should be up and running in a few seconds.

Your folder structure should look something like this when you are done:<br>
📦discord-bot-nodejs<br>
┣ 📂config<br>
┃ ┗ 📜config.json<br>
┣ 📂node_modules<br>
┣ 📂src<br>
 ┃ ┣ 📂commands<br>
 ┃ ┣ 📜colors.js<br>
 ┃ ┗ 📜index.js<br>
 ┣ 📜.gitignore<br>
 ┣ 📜package-lock.json<br>
 ┣ 📜package.json<br>
 ┗ 📜README.md<br>
