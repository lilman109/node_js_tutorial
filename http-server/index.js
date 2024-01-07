const http = require("http");

const PORT = 3000;

/* const server = http.createServer((req, res) => { */
/*   res.writeHead(200, { */
/*     "Content-Type": "application/json", */
/*   }); */
/*   res.end( */
/*     JSON.stringify({ */
/*       id: 1, */
/*       name: "Sir Isaac Newton", */
/*     }), */
/*   ); */
/* }); */

const friends = [
  {
    id: 0,
    name: "Nikola Tesla",
  },
  {
    id: 1,
    name: "Sir Isaac Newton",
  },
  {
    id: 2,
    name: "Thomas Eddison",
  },
];

const server = http.createServer();
server.on("request", (req, res) => {
  const items = req.url.split("/");
  if (req.method === "POST" && items.at(1) === "friends") {
    req.on("data", (data) => {
      const friend = data.toString(); // data is buffer so convert to string
      console.log("Request: ", friend);
      friends.push(JSON.parse(friend));
    });
    req.pipe(res);
  } else if (req.method === "GET" && items.at(1) === "friends") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    if (req.method === "GET" && items.length === 3) {
      const friendIndex = Number(items.at(2));
      res.end(JSON.stringify(friends.at(friendIndex)));
    } else {
      res.end(JSON.stringify(friends));
    }
  } else if (req.method === "GET" && items.at(1) === "messages") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<body>");
    res.write("<ul>");
    res.write("<li>Hello Sir Isaac Newton</li>");
    res.write("<li>What are your thoughts on astronomy?</li>");
    res.write("</ul>");
    res.end();
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(PORT, () => {
  console.log("Listening on port 3000");
});
