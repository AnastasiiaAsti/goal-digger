const mongoose = require('mongoose')
const Schema = mongoose.Schema

const pinSchema = new Schema({
    user: {
        type: String,
        required: true
    },
    title: {
        type: String,
        require: true,
    },
    detail: {
        type: String,
        require: true,
    },
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5,
    },
    lat: {
        type: Number,
        require: true,
    },
    long: {
        type: Number,
        require: true,
    }
},
    { timestamps: true }
)

module.exports = mongoose.model('Pin', pinSchema)