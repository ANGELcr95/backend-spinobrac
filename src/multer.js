import multer from "multer";
import sharp from "sharp";
import path from "path";

const helperImg = (filePath,filename, size= 300)=> {
    return sharp(filePath)
        .resize(size)
        .toFile(`optimize/${filename}`)
} 

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,'../public/img'))
    },
    filename: function (req, file, cb) {
        const ext = file.originalname.split('.').pop();
      cb(null, `image${Date.now()}.${ext}`)
    }
})

export default storage
   


// app.post('/uploadfile', upload.single('file'), (req, res, next) => {
//     helperImg(req.file.path,`resize-${req.file.filename}`)
//     const file = req.file
//     if (!file) {
//         const error = new Error('Please upload a file')
//         error.httpStatusCode = 400
//         return next(error)
//     }
//         res.send(file)

//     })
