const EventEmitter = require("events");
const celebrity = new EventEmitter();

// Example 1
/* // Subscribe to celebrity (race driver) for Observer 1 */
/* celebrity.on("race win", (arguments) => { */
/*   console.log("Congratulations you are the best!"); */
/* }); */
/**/
/* // Subscribe to celebrity (race driver) for Observer 2 */
/* celebrity.on("race win", (arguments) => { */
/*   console.log("Boo, I could've have done better than that"); */
/* }); */
/**/
/* process.on("exit", (code) => { */
/*   console.log("Process exit event with code: ", code); */
/* }); */
/**/
/* celebrity.emit("race win"); */
/* celebrity.emit("race lose"); */
/* celebrity.emit("race win"); */

// Example 2
// Subscribe to celebrity (race driver) for Observer 1
celebrity.on("race", (result) => {
  if (result === "win") console.log("Congratulations you are the best!");
});

// Subscribe to celebrity (race driver) for Observer 2
celebrity.on("race win", (result) => {
  if (result === "lose")
    console.log("Boo, I could've have done better than that");
});

process.on("exit", (code) => {
  console.log("Process exit event with code: ", code);
});

celebrity.emit("race", "win");
celebrity.emit("race", "lose");
celebrity.emit("race", "win");
