const amount = 8;

if (amount < 10) {
  console.log("small number");
} else {
  console.log("large number");
}

console.log(`hey its my first node app!!!`);

console.log("path" + __dirname);
console.log("file name" + __filename);
console.log("func to use module" + require);
console.log("info about current module" + module);
console.log("info about env" + process);

setInterval(() => {
    console.log('hello world');
}, 1000);

