const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        max: 20,
    },
    userName: {
        type: String,
        require: true,
        max: 10,
    },
    password: {
        type: String,
        required: true,
    }
})

const User = mongoose.model("User", userSchema);

module.exports = {User};