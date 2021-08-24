const {Client} = require("discord.js")
const client = new Client({intents: 12345});
client.on("ready", async _ => {
console.log("ready")
    const data = [
        {
            name: "ping",
            description: "Pong!",
        },
        {
            name: "fumo",
            description: "Send a fumo image.",
            "options": [
            {
                "type": 3,
                "name": "id",
                "description": "The fumo id",
                "required": false
            }
             ]

        },
        {
            "name": "suggestfumo",
            "description": "add a fumo to the database",
            "options": [
                {
                    "type": 3,
                    "name": "url",
                    "description": "the image url",
                    "required": true
                },
                {
                    "type": 3,
                    "name": "name",
                    "description": "fumos name",
                    "required": true
                }
            ]
        },
  
        {
            name: "invite",
            description: "Send the bot's invite",
        }
    ];
    const command = await client.application?.commands.set(data);
    console.log(command);
    const guild = await client.guilds.cache.get(process.env.DevGuildID)
    guild.commands.create({
        "name": "addfumo",
        "description": "add a fumo to the database",
        "options": [
            {
                "type": 3,
                "name": "url",
                "description": "the image url",
                "required": true
            },
            {
                "type": 3,
                "name": "name",
                "description": "fumos name",
                "required": true
            }
        ]
    }
    )
    
})
client.login(process.env.BotToken)