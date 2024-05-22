const mongoose = require("mongoose")

const carpetsSchema = mongoose.Schema({
    image: [String],
    name: String,
    description: String,
    price: Number, 
    categoryId:  {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Categories'
    },
})

const Carpets = mongoose.model("Carpets", carpetsSchema)

module.exports = Carpets