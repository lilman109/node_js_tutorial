const { send } = require("./request");
const { read } = require("./response");

function request(url, data) {
  send(url, data);
  return read();
}

const responseData = request("www.example.com", "example data");
console.log(responseData);
