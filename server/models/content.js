const { Schema, model } = require('mongoose');

var contentSchema = new Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    cost: {
        type: Number,
    },
    image: {
        type: String,
    },
    video: {
        type: String,
    },
    creator: [{
        type: Schema.Types.ObjectId,
        ref: 'creator',
    }],
},
);

const Content = model('content', contentSchema);

module.exports = Content;