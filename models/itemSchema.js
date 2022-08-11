const Schema = require('mongoose').Schema;

const itemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    links: [String],
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
}, {
        timestamps: true
    });

module.exports = itemSchema;