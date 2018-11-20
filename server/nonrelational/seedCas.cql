DROP KEYSPACE IF EXISTS nikie;
CREATE KEYSPACE nikie
WITH REPLICATION = {'class':'SimpleStrategy', 'replication_factor' : 1}
AND durable_writes = false;

USE nikie;

CREATE TABLE reviews (
  id int,
  shoeID int,
  author text,
  title text,
  body text,
  stars int,
  createdAt timestamp,
  PRIMARY KEY(id)
);


CREATE INDEX reviews_shoe ON nikie.reviews(shoeID);

COPY reviews (id,shoeID,author,title,body,stars,createdAt) FROM '/Users/svetlanakhan/Desktop/SDCproject/Review-Service/server/nonrelational/reveiws2.csv' WITH DELIMITER = ',' AND HEADER = FALSE;
