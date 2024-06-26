let express = require('express');
let app = express();

// Express routes method syntax: app.METHOD(PATH, HANDLER)

// app.get("/", (req, res) => {
//     res.send("Hello Express");
//   });

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
  });


  module.exports = app;
