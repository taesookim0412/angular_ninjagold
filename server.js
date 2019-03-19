const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
app.use(bodyparser.json());
app.use(express.static(__dirname + "/public/dist/public"));

require ('./server/configs/mongoose.js')(mongoose);
require('./server/configs/routes.js')(app);


app.listen(8000, function() {
    console.log("Listening on port 8000.")
});