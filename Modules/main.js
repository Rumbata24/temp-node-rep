// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require("./names");
const sayHi = require("./utils");
const data = require("./names-alt");

require("./mind-granade");

// sayHi("Susan");
// sayHi(names.john);
// sayHi(names.peter);
