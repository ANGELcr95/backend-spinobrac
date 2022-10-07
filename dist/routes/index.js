"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _tasks = _interopRequireDefault(require("./tasks"));

var _activities = _interopRequireDefault(require("./activities"));

var _workers = _interopRequireDefault(require("./workers"));

var _login = _interopRequireDefault(require("./login"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import * as fs from 'fs';
var router = (0, _express.Router)(); // const PATH_ROUTES = __dirname;
// const removeExtension = (filename) => {
//     return filename.split(".").shift();
// }
// fs.readdirSync(PATH_ROUTES).filter((file) => {
//     const name = removeExtension(file)
//     if(name != "index"){
//         console.log('rutas--------, name', name, file);
//         router.use(`/${name}`, import(`./${file}`));
//     }
// })

router.use('/tasks', _tasks["default"]);
router.use('/workers', _workers["default"]);
router.use('/activities', _activities["default"]);
router.use('/login', _login["default"]); // router.use('/workers', import(`./workers`));

var _default = router;
exports["default"] = _default;