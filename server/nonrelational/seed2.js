// const fs = require("fs");
// const faker = require("faker");

// const stream = fs.createWriteStream("./reveiws2.csv", { flags: "a" });
// const records = 3000000;
// let i = 0;
// const start = new Date();

// function write() {
//   while (i < records) {
//     for (let j = 0; j < 4; j++) {
//       const shoeID = i + 1;
//       let author = faker.name.findName();
//       let title = faker.lorem.word();
//       let body = faker.lorem.paragraph();
//       let stars = Math.floor(Math.random() * 5);
//       let createdAt = JSON.stringify(faker.date.past()).slice(1, 11);

      
//       if ((i + 1) % (records / 10000) === 0) {
//         console.clear();
//         console.log(`${((i / records) * 100).toFixed(2)}% complete...`);
//       }

//       if (
//         !stream.write(
//           `${faker.random.uuid()},${shoeID},${author},${title},${body},${stars},${createdAt}\n`
//         )
//       ) {
//         return;
//       }
//     }

//     i += 1;
//   }

//   stream.end();

//   const end = new Date();

//   console.log(`Took ${end - start} milliseconds to write ${records * 5} files`);
// }

// stream.on("drain", () => {
//   write();
// });

// write();

const fs = require("fs");
const faker = require("faker");

const stream = fs.createWriteStream("./reveiws2.csv", { flags: "a" });
const records = 10000000; 
let i = 0;
let id = 0;
const start = new Date();

function write() {
  while (i < records) {
    for (let j = 0; j < 3; j += 1) {
      const shoeID = i + 1;
      id += 1;
      let author = faker.name.findName();
      let title = faker.lorem.word();
      let body = faker.lorem.sentences(2);
      let stars = Math.floor(Math.random() * 5);
      let createdAt = JSON.stringify(faker.date.past()).slice(1, 11);

      
      if ((i + 1) % (records / 10000) === 0) {
        console.clear();
        console.log(`${((i / records) * 100).toFixed(2)}% complete...`);
      }

      if (
        !stream.write(
          `${id},${shoeID},${author},${title},${body},${stars},${createdAt}\n`
        )
      ) {
        return;
      }
    }

    i += 1;
  }

  stream.end();

  const end = new Date();

  console.log(`Took ${end - start} milliseconds to write ${records * 3} files`);
}

stream.on("drain", () => {
  write();
});

write();


