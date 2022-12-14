const mongoose = require('mongoose')
const Schema = mongoose.Schema

const pinSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
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
    lng: {
        type: Number,
        require: true,
    }
},
    { timestamps: true }
)

module.exports = mongoose.model('Pin', pinSchema)