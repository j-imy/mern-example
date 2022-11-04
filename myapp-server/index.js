const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require("mongoose");
const testModel = require("./models");

const app = express();
const port = 3001;

app.use(cors());

mongoose.connect('mongodb+srv://dharmeshoverflow:Vashishth1Patel@askoverflow.5qnp3jq.mongodb.net/?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/details', async (req, res) => {
    // const user = await testModel.findOne({id: 123});
    const test = await testModel.find();
    res.send(test);
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))