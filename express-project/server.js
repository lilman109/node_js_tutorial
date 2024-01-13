const express = require("express");
const path = require("path");

const friendsRouter = require("./routes/friends.router");
const messagesRouter = require("./routes/messages.router");

const app = express();
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

const PORT = 3000;

// middleware: next() example
app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});

app.use(express.json());

/* app.get("/", (req, res) => { */
/*   res.send("Hello world!"); */
/* }); */

/* app.get("/", (req, res) => { */
/*   res.render("index", { */
/*     title: "My skiing trip", */
/*     caption: "Let's go skiiing", */
/*   }); */
/* }); */
app.get("/", (req, res) => {
  res.render("index", {
    title: "My skiing trip",
    caption: "Let's go skiiing",
  });
});

// site
app.use("/site", express.static(path.join(__dirname, "public")));

// messages
app.use("/messages", messagesRouter);

// friends
app.use("/friends", friendsRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
