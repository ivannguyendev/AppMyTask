var path = require('path');
var multer = require('multer');

const UPLOAD_PATH = './uploads';

const imageFilter = function (req, file, cb) {
    // accept image only
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
};

var storage = multer.diskStorage({
    destination: './uploads/',
    filename: function (req, file, cb) {
      crypto.pseudoRandomBytes(16, function (err, raw) {
        if (err) return cb(err)
  
        cb(null, raw.toString('hex') + path.extname(file.originalname))
      })
    }
  })
  
  var upload = multer({ storage: storage })

module.exports = {
    imgUpload:function(req,res){
        upload(req,res,function(err) {
            //console.log(req.body);
            //console.log(req.files);
            if(err) {
                return res.end("Error uploading file.");
            }
            res.end("File is uploaded");
        });
    },
    
}