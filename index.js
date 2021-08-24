const Discord = require("discord.js");
const model = require("./model");
require("dotenv").config();
const client = new Discord.Client({ intents: 0 });
const db = require("./db");
const fetch = require("node-fetch");
const webhook = process.env.webhookToken;
const webhookClient = new Discord.WebhookClient({ url: webhook });

const ids = [process.env.devIdOne, process.env.devIdTwo];
client.on("debug", console.log);
client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;
  const ping = new Discord.MessageEmbed()
    .setTitle("Bot pings")
    .setDescription(
      `
        WebSocket's ping: \`${client.ws.ping}\`,
        Bot's ping: \`${Date.now() - interaction.createdTimestamp}\`
        Database ping: \`${await db.collection.latencyStats}\`
        `
    )
    .setFooter(new Date().toString())
    .setAuthor("Fumobot", client.user.displayAvatarURL());

  if (interaction.commandName == "ping") interaction.reply({ embeds: [ping] });
  const fumos = await model.find();
  if (interaction.commandName == "fumo") {
    if (interaction.options.get("id")) {
      let id = interaction.options.get("id").value;
      const fumobyid = await model.findById(id, (error, fumo) => {
        if (error)
          return interaction.reply({
            content: "No fumo found",
            ephemeral: true,
          });
      });
      let fumo = fumobyid;
      if (!fumo)
        return interaction.reply({
          content: "No fumo fumo found",
          ephemeral: true,
        });
      const embed = new Discord.MessageEmbed()
        .setTitle(fumo.name)
        .setImage(fumo.url)
        .setFooter("ID: " + fumo.id);
      interaction.reply({ embeds: [embed] });
    } else {
      let fumo = fumos[Math.floor(Math.random() * fumos.length)];

      const embed = new Discord.MessageEmbed()
        .setTitle(fumo.name)
        .setImage(fumo.url)
        .setFooter("ID: " + fumo.id);
      interaction.reply({ embeds: [embed] });
    }
  }
  if (interaction.commandName == "invite") {
    const invite =
      "https://discord.com/api/oauth2/authorize?client_id=876841555347001355&scope=applications.commands";
    const embed = new Discord.MessageEmbed()
      .setTitle("Invite")
      .setDescription(invite);
    interaction.reply({ embeds: [embed] });
  }

  if (interaction.commandName === "addfumo") {
    if (!ids.includes(interaction.member.user.id))
      return interaction.reply({
        content: "You have no permissions to run this command",
        ephemeral: true,
      });
    const url = interaction.options.get("url").value;
    const nombre = interaction.options.get("name").value;

    const modele = await new model({
      url: url,
      name: nombre,
    });
    const guardado = await modele.save();
    interaction.reply(`Fumo added whit id \`${guardado._id}\``);
  }

  if (interaction.commandName === "suggestfumo") {
    const url = interaction.options.get("url").value;
    const nombre = interaction.options.get("name").value;

    const embed = new Discord.MessageEmbed()
      .setTitle("Fumo suggestion")
      .setAuthor(interaction.member.user.tag)
      .addField("URL", url)
      .addField("name", nombre)
      .setImage(url);

    webhookClient
      .send({ embeds: [embed] })
      .then((_) => interaction.reply("Suggestion sent"));
  }
});
process.on("unhandledRejection", (err) => console.error(err));
client.login(process.env.BotToken);
