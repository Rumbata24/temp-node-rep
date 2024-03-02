const path = require("path");

console.log(path.sep);

const filePath = path.join("/content", "subfolder", "test.txt");
console.log("File Path: " + filePath);

const base = path.basename(filePath);
console.log("Returns last path destination: " + base);

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log("From current path, to test: " + absolute);
