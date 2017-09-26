const express = require('express');
const myTaskCtl = require('../controllers/myTask.controller');
const fileCtl = require('../controllers/file.controller');
var router = express.Router();

/* GET /task?pageSize=1&pageIndex=5 . */
router.get('/', myTaskCtl.getTask);

/* POST /task */
router.post('/', myTaskCtl.createTask);

/* DELETE /task/:taskId */
router.delete('/:taskId', myTaskCtl.delTask);

/* POST /file/upload */
router.post('/', fileCtl.imgUpload);

module.exports = router;
