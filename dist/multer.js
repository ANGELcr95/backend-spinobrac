"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.storage = exports.helperImg = void 0;

var _multer = _interopRequireDefault(require("multer"));

var _sharp = _interopRequireDefault(require("sharp"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var helperImg = function helperImg(filePath, filename) {
  var size = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 300;
  return (0, _sharp["default"])(filePath).resize(size).toFile("public/img/".concat(filename));
};

exports.helperImg = helperImg;

var storage = _multer["default"].diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, _path["default"].join(__dirname, '../public/img'));
  },
  filename: function filename(req, file, cb) {
    console.log(file);
    var ext = file.originalname.split('.').pop();
    cb(null, "image".concat(Date.now(), ".").concat(ext));
  }
}); // app.post('/uploadfile', upload.single('file'), (req, res, next) => {
//     helperImg(req.file.path,`resize-${req.file.filename}`)
//     const file = req.file
//     if (!file) {
//         const error = new Error('Please upload a file')
//         error.httpStatusCode = 400
//         return next(error)
//     }
//         res.send(file)
//     })


exports.storage = storage;