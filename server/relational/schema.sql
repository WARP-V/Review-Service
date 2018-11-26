DROP DATABASE IF EXISTS nikie;

CREATE DATABASE nikie;
\connect nikie;

DROP TABLE IF EXISTS review;

CREATE TABLE review (
  _id SERIAL PRIMARY KEY,
  shoeID INT,
  author VARCHAR(30),
  title VARCHAR(50),
  body VARCHAR(500),
  stars INT,
  createdAt DATE
);

COPY review(shoeID, author, title, body, stars, createdAt) FROM '/Users/svetlanakhan/Desktop/SDCproject/Review-Service/server/relational/review.csv' DELIMITERS ',' CSV;
