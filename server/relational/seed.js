const fs = require('fs');
const faker = require("faker");

Number.prototype.pad = function(size) {
  var s = String(this);
  while (s.length < (size || 2)) {
    s = "0" + s;
  }
  return s;
};
//
const csvReview = () => {

  const file = fs.createWriteStream('./reviews.csv');
  let shoeID;
  let author;
  let title;
  let stars;
  let body;
  let createdAt;
  let line;


  for (let i = 1; i < 1000001; i += 1) {
    shoeID = i.pad(9);
    author = faker.name.findName();
    title = faker.lorem.word();
    body = faker.lorem.sentences();
    stars = Math.floor(Math.random() * 5);
    createdAt = faker.date.past();
    line = `${shoeID},${author},${title},${stars},${body},${createdAt}\n`;
    file.write(line);
  }
  file.end();

  console.log(`Reviews csv is complete...`);
};

csvReview();

module.exports = csvReview;
