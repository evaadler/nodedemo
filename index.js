console.log("hello node");
let name="fifi";

let parses = require("./parseparams.js");
let str = "username=admin&password=123&timeout=10000&isLogged=true&systemVersion=10";

let finished = parses.parse(str);
console.log(finished);