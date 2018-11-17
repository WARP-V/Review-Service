// const fs = require("fs");
// const faker = require("faker");

// // Number.prototype.pad = function(size) {
// //   var s = String(this);
// //   while (s.length < (size || 2)) {
// //     s = "0" + s;
// //   }
// //   return s;
// // };
// const file = fs.createWriteStream(
//   ".//reviews.csv",
//   { encoding: "utf8" },
//   { flags: "a" }
// );

// file.on("drain", () => {
//   write();
// });
// const write = () => {
//   const start = new Date();

//   let shoeID;
//   let author;
//   let title;
//   let stars;
//   let body;
//   let createdAt;
//   let line;
//   const rows = 3333334;
//   for (let i = 1; i < rows + 1; i++) {
//     shoeID = i;//.pad(9);
//     for (let j = 0; j < 3; j++) {
//       author = faker.name.findName();
//       title = faker.lorem.word();
//       body = faker.lorem.sentence();
//       stars = Math.floor(Math.random() * 5);
//       createdAt = JSON.stringify(faker.date.past()).slice(1, 11);
//       line = `${shoeID},${author},${title},${stars},${body},${createdAt}\n`;
//       file.write(line);
//     }
//   }
//   file.end();
//   const end = new Date();
//   console.log(
//     `Took ${end - start} milliseconds to write ${(rows * 3) /
//       1000000} million files...`
//   );
// };

// write();
// module.exports = write;

const fs = require("fs");
const faker = require("faker");

const stream = fs.createWriteStream("./reveiws.csv", { flags: "a" });
const records = 10 * 1000000; // Number of primary records by million count
let i = 0;
const start = new Date();

function write() {
  while (i < records) {
    for (let j = 0; j < 5; j++) {
      const shoeID = i + 1;
      let author = faker.name.findName();
      let title = faker.lorem.word();
      let body = faker.lorem.paragraph();
      let stars = Math.floor(Math.random() * 5);
      let createdAt = JSON.stringify(faker.date.past()).slice(1, 11);

      // Create a percentage status
      if ((i + 1) % (records / 10000) === 0) {
        console.clear();
        console.log(`${((i / records) * 100).toFixed(2)}% complete...`);
      }

      if (
        !stream.write(
          `${shoeID},${author},${title},${stars},${body},${createdAt}\n`
        )
      ) {
        return;
      }
    }

    i += 1;
  }

  stream.end();

  const end = new Date();

  console.log(`Took ${end - start} milliseconds to write ${records * 5} files`);
}

stream.on("drain", () => {
  write();
});

write();
