module.exports = [
  {
    name: "ping",
    description: "Pong!",
  },
  {
    name: "fumo",
    description: "Send a fumo image.",
  },
  {
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
          "required":true
      }
  ]
},
  
  {
    name: "invite",
    description: "Send the bot's invite",
    }
];