let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let MessageSchema= new Schema({
    date:{
        type: Date,
        default: new Date()
    },
    text:{
        type: String,
        /*required: true*/

    },
    user:{
        type: Schema.ObjectId,
        ref: "User"
    },
    chat:{
        type: Schema.ObjectId,
        ref: "Chat"
    }
});

let model = mongoose.model("messege",MessageSchema);

module.exports = model;
