const { parse } = require("csv-parse");
const fs = require("fs");

const habitablePlanets = [];
const isHabitablePlanet = (planet) => {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
};

fs.createReadStream("./kepler_data.csv")
  .pipe(
    parse({
      comment: "#", // # is the comment character in the file
      columns: true, //
    }),
  )
  .on("data", (data) => {
    if (isHabitablePlanet(data)) {
      habitablePlanets.push(data);
    }
  })
  .on("error", (err) => {
    console.log("error");
  })
  .on("end", () => {
    console.log(
      habitablePlanets.map((planet) => {
        return planet["kepler_name"];
      }),
    );
    console.log(`${habitablePlanets.length} habitable planets were found.`);
  });
