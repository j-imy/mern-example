const mongoose = require("mongoose");

const TestSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
});

const Test = mongoose.model("tests", TestSchema );

module.exports = Test;