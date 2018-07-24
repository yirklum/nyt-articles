// Require dependencies
const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require('path');
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Server up static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

// Add routes
app.use(routes);

mongoose.Promise = global.Promise;

// Connect to MongoDB
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/nyt-articles",
    // {
    //   useMongoClient: true
    // }
  );
  

// Start the server
app.listen(PORT, function() {
  console.log(`🌎  ==> Server now listening on PORT ${PORT}!`);
});