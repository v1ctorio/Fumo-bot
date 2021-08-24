const { connect, connection } = require("mongoose")
var urlmon = process.env.mongoURL;

connect(urlmon, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
module.exports = connection
connection.on("open", () => {
  console.log("Connected to mongoose!");
});

connection.on("error", (err) => {
  console.error(` error: \n${err.stack}`);
});