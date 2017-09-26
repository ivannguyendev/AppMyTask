const mongoose = require('mongoose');
var schema = mongoose.Schema;


var taskSchema = new schema({
    _id: schema.Types.ObjectId,
    username: String,
    subject: String,
    time: Date,
    imgUrl: [{url: String}]
})
var myTask = mongoose.model('mytask', taskSchema);

module.exports = myTask;