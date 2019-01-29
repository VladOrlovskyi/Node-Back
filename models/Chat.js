let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let ChatSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    users:[{
        type:Schema.ObjectId,
        ref: "User"
    }]
});

let model = mongoose.model("chat", ChatSchema);

module.exports = model;