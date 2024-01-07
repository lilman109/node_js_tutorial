// HTTP example
/* const http = require("http"); */
/**/
/* const request = http.request("http://www.google.com", (res) => { */
/*   res.on("data", (chunk) => { */
/*     console.log(`Data chunk is ${chunk}`); */
/*   }); */
/*   res.on("end", () => { */
/*     console.log("No more data"); */
/*   }); */
/* }); */
/**/
/* request.end(); // triggers to send the response */

// HTTPS example
/* const https = require("https"); */
/**/
/* const request = http.request("https://www.google.com", (res) => { */
/*   res.on("data", (chunk) => { */
/*     console.log(`Data chunk is ${chunk}`); */
/*   }); */
/*   res.on("end", () => { */
/*     console.log("No more data"); */
/*   }); */
/* }); */
/**/
/* request.end(); // triggers to send the response */

// Destructure example
/* const { request } = require("https"); */
/**/
/* const req = request("https://www.google.com", (res) => { */
/*   res.on("data", (chunk) => { */
/*     console.log(`Data chunk is ${chunk}`); */
/*   }); */
/*   res.on("end", () => { */
/*     console.log("No more data"); */
/*   }); */
/* }); */
/**/
/* req.end(); // triggers to send the response */

const { get } = require("https");

get("https://www.google.com", (res) => {
  res.on("data", (chunk) => {
    console.log(`Data chunk is ${chunk}`);
  });
  res.on("end", () => {
    console.log("No more data");
  });
});

// no need for end() for get
