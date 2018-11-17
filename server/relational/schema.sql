DROP DATABASE IF EXISTS nikie;

CREATE DATABASE nikie;
\connect nikie;

DROP TABLE IF EXISTS review;

CREATE TABLE review (
  id SERIAL PRIMARY KEY,
  shoeID INT,
  author VARCHAR(30),
  title VARCHAR(50),
  stars INT,
  body VARCHAR(800),
  createdAt DATE
);

COPY review(shoeID, author, title, stars, body, createdAt) FROM '/Users/svetlanakhan/Desktop/SDCproject/Review-Service/server/relational/reveiws.csv' DELIMITERS ',' CSV;

