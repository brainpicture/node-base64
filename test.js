var base64 = require("./build/default/base64");
var sys = require("sys");

var str = base64.encode('wowdsajjfsdakfhsjkdf673e;;;;;23;!!!!!!1@#$%^&*()');

sys.puts(str);

sys.puts(base64.decode(str));

