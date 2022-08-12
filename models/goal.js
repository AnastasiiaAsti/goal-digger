const mongoose = require('mongoose')
const Schema = mongoose.Schema

const goalSchema = new Schema({
    name: { type: String, required: true }, 
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    complete: false
}, {
        timestamps: true
    });

module.exports = mongoose.model('Goal', goalSchema);