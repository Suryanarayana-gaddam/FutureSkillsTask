const mongoose = require("mongoose");
const {Schema} = mongoose;

const cardSchema = new Schema({
    id : {
        type: String,
        required: true
    },
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
})

const Card = mongoose.model("cards",cardSchema);
module.exports = Card;