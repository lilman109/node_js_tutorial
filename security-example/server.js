const fs = require("fs");
const https = require("https");
/* const http = require("http"); */
const path = require("path");
const express = require("express");
const helmet = require("helmet");
const passport = require("passport");
const api = require("./routes/api");
const cookieSession = require("cookie-session");

const app = express();
app.use(helmet()); // always at the top after express()

app.use(
  cookieSession({
    name: "session",
    maxAge: 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY_2, process.env.COOKIE_KEY_1],
  }),
);
// save session to cookie
passport.serializeUser((user, done) => {
  done(null, user.id);
});
// read session from cookie
passport.deserializeUser((id, done) => {
  done(null, id);
});

app.use(passport.initialize());
app.use(passport.session());
app.use(api);

/* Google Authentication OAuth2 */
function checkLoggedIn(req, res, next) {
  const isLoggedIn = req.isAuthenticated() && req.user;
  if (!isLoggedIn) {
    return res.status(401).json({ error: "Not logged in" });
  }

  next();
}

app.get("/auth/logout", (req, res) => {
  req.logout();
  return res.redirect("/");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/secret", checkLoggedIn, (req, res) => {
  res.send("Your value is 42");
});

app.get("/failure", (req, res) => {
  return res.send("failed to log in");
});

/* http */
/* const server = http.createServer(app); */
/* server.listen(8000, () => {}); */

/* https */
const server = https.createServer(
  {
    key: fs.readFileSync("key.pem"),
    cert: fs.readFileSync("cert.pem"),
  },
  app,
);

server.listen(3000, () => {});
