const mongoose = require('mongoose');
const { Schema } = mongoose;
mongoose.Promise = global.Promise;
const mongoosePaginate = require('mongoose-paginate-v2');

const commentSchema = new Schema({
    id: Number,
    postId: Number,
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },


});
commentSchema.plugin(mongoosePaginate);
const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment