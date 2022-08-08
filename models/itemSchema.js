const Schema = require('mongoose').Schema;

const itemSchema = new Schema({
    photosURL: [
        {
            type: String,
            validate: {
                validator: function (value) {
                    const urlPattern = /(http|https):\/\/(\w+:{0,1}\w*#)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%#!\-/]))?/;
                    const urlRegExp = new RegExp(urlPattern);
                    return value.match(urlRegExp);
                },
                message: props => `${props.value} is not a valid URL`
            }
        }
    ],
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