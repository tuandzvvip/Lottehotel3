const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password:{
            type: String,
            required: true,
        },
        region: {
            type: String,
        },
        fullname: {
            type: String,
        },
        birthday:{
            type: String,
        },
        Contact:{
            type: String,
        },
    });

let User = mongoose.model("User", UserSchema);

module.exports = {User};
