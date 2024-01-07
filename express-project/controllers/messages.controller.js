const path = require("path");

function getMessages(req, res) {
  /* res.send("<ul><li>Hello Sir Isaac Newton</li></ul>"); */
  /* res.sendFile(path.join(__dirname, "..", "public/images", "skimountain.jpg")); */
  res.render("messages", {
    title: "Hey Friend",
    friend: "Alan",
  });
}

function postMessage(req, res) {
  console.log("Updating messages...");
}

module.exports = {
  getMessages,
  postMessage,
};
