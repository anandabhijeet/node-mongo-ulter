const multer = require('multer');

//Set storage 
var storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, 'uploads')
    },
    filename: (req, file, cb)=>{
        cb(null, file.filename + '-' + Date.now())
    }
})

var upload = multer({storage: storage})

module.exports = {upload}