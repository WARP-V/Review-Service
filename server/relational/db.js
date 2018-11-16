const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

pool.on('connect', () => {
  console.log('connected to the db');
});

/**
 * Create Tables
 */
const createTables = () => {
  const queryRev =
    `CREATE TABLE IF NOT EXISTS
      reviews(
        shoeID INT PRIMARY KEY,
        author TEXT,
        title TEXT,
        stars INT,
        body TEXT,
        createdAt TIMESTAMP,
      )`;

  pool.query(queryRev)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
}

const readFile = () => {
  const lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('../reviews.csv'),
  });

  lineReader.on('line', (line) => {
    if (line) {
      const tmp = JSON.parse(line);
      const queryInsert = `INSERT INTO reviews(shoeID, author) VALUES('${tmp.shoeID}','${tmp.author}')`;
      pool.query(queryInsert)
        .then((res) => {
          console.log(res);
          pool.end();
        })
        .catch((err) => {
          console.log(err);
          pool.end();
        });
      // console.log('\n \n \n', JSON.parse(line));
    }
  });
};
/**
 * Drop Tables
 */
const dropTables = () => {
  const queryText = 'DROP TABLE IF EXISTS reviews';
  pool.query(queryText)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
};

pool.on('remove', () => {
  console.log('client removed');
  process.exit(0);
});

module.exports = {
  createTables,
  dropTables,
  readFile,
};

require('make-runnable');

