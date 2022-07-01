    const fs = require("fs");
    const path = require("path");
    const images = require("../uploadSchema/fileUploadSchema");


    const homepage = (req, res)=>{
        res.send("hello")
    } 

    const uploadImage =  (req, res)=>{
    
        var img = fs.readFileSync(req.file.path); 
        console.log(req.file.path);
        
        var encode_img = img.toString('base64');
        var final_img = {
            contentType: "image/png",
          
            image:new Buffer.from(encode_img,'base64')
        };

        images.create(final_img, (err, result)=>{
            if(err)console.log(err);
            console.log(result);
            console.log("saved to database");
            res.contentType(final_img.contentType);
            res.send(final_img.image);
        })

    }

    module.exports = {
        homepage,
        uploadImage
    }