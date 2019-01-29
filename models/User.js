let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let UserSchema = new Schema({
    name: String,
    phone:{
        type: Number,
        required: true
    },
    password: String,
});

let model = mongoose.model("user", UserSchema);

module.exports = model;