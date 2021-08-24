const { Schema, model } = require("mongoose");

const schema = new Schema({
    url: String,
    name: String
})


module.exports = new model("fumo", schema)