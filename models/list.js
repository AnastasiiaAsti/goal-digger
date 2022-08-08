const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const itemSchema = require('./itemSchema');

const lineItemSchema = new Schema({
    item: itemSchema
}, {
    toJSON: { virtuals: true }
});

const listSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    lineItems: [lineItemSchema],
    isAdded: { type: Boolean, default: false }
}, {
    timestamps: true,
    toJSON: { virtuals: true }
});

module.exports = mongoose.model('List', listSchema);