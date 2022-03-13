# Fumo-bot

Fumo bot is a discord interaction with more than a hundred images of fumos, you can invite it clicking the link.

[Interaction invite](https://discord.com/api/oauth2/authorize?client_id=876841555347001355&scope=applications.commands)

## How to setup

### 0 Install all dependencies

Install node from [nodejs.org](https://nodejs.org/en/)
if you already install node run the nexto command `node -v` if the version is lower than `16.6.1` reinstall nodejs from website.

install yarn whit `npm i -g yarn`

setup all dependencies running `yarn` in the project folder



### 1 setup enviroment variables
create a `.env` and copy and paste this
```env
mongoURL=yourMongoUrl
BotToken=TheBotToken
webhookToken=SuggestionWbhookToken
devIdOne=DeveloperDiscordId
devIdTwo=OtherDevDiscordId
BotInvite=DiscordBotInvite
DevGuildID=GuildID
```
#### Variables description
- `yourMongoUrl` mongo database URL
- `TheBotToken` Discord bot's token, get it from [Discord developer portal](https://discord.dev) 
- `SuggestionWbhookToken` a webhook url in the dev server
- `DeveloperDiscordId` your discord user ID
- `OtherDevDiscordId` colaborator discord user id, it can be empty
- `DiscordBotInvite` your bot's discord invite whit the `application.commands` scope
- `GuildID` dev guild Id
### 2 setup dev server

Invite the bot to the dev server whit `DevGuildID` id using the `bot` scope.

### 3 setup slash commands

run [setupcommands.js](./src/setupcommands.js) (`yarn build`)
if you check now on the dev guild all commands would be visible, if not wait.
### 4 run the bot 

run `yarn start`


