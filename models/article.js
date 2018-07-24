const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: { type: String, required: true },
  author: {type: String, required: false },
  date: { type: Date, required: true },
  url: { type: String, required: true },
  synopsis: { type: String, required: false },
  externalID: { type: String, required: true }
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
