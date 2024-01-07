const mission = process.argv[2];

if (mission === "learn") {
  console.log("time to write some node code");
} else {
  console.log(`Is ${mission} really more fun?`);
}

console.log("0", process.argv[0]);
console.log("1", process.argv[1]);

setTimeout(() => {
  console.log("after 3 seconds");
}, 3000);
