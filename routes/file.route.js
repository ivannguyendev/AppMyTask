const express = require('express');
const fileCtl = require('../controllers/file.controller');
var path = require('path');
var getLanguages = express();
var router = express.Router();

/* POST /file/upload */
router.post('/upload', fileCtl.imgUpload);

/* Get /file/languages */
router.get('/languages',function(req, res){
    return res.sendFile(path.join(__dirname, '/../public/lang.json'))
})
module.exports = router;
