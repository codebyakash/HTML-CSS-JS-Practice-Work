const fs = require("fs");
let text= fs.readFileSync("lv.txt", "utf-8");
console.log("The content of the fill is ")
console.log(text);

text= text.replace("love", "hate");
console.log(text);
fs.writeFileSync("hate.txt", text);
