const myTask = require('../model/mytask.model');
var ObjectID = require('mongodb').ObjectID;
const mongoose = require('mongoose')

module.exports = {
    createTask: function(req,res){
        var task = req.body;
        var day = new Date(task.time);
        time = day.setDate(day.getDate()+1);
        var value = new myTask({
            _id: new ObjectID(),
            username: task.username,
            subject: task.subject,
            time: time,
        }).save(function(err){
            if(err){
                res.status(504);
                res.end();
            }else{
                console.log('use saved');
                res.end();
            }
        })
    },
    getTask: function(req,res,next){
        
        var pageSize = new Number (req.query.pageSize);
        var pageIndex = new Number(req.query.pageIndex);
        
        myTask.find({}, function (err, task) {
            if (err) {
              res.status(504);
              res.end(err);
            } else {
              for (var i = 0; i < task.length; i++) {
              }
              res.end(JSON.stringify(task));
            }
          }).skip(pageSize*(pageIndex-1)).sort({time: 1}).limit(pageSize);
    },
    delTask: function(req,res, next){
        console.log(mongoose.Types.ObjectId(req.params.taskId));
        myTask.find({_id: mongoose.Types.ObjectId(req.params.taskId)},function(err){
            if(err){
                req.status(504);
                req.end();
                console.log(err);
            }
        }).remove(function(err){
            console.log(err);
            if(err){
                res.end(err);
            }else{
                res.end();
            }
        })
    },
}
