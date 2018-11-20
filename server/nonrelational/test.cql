CREATE KEYSPACE test
WITH REPLICATION = {'class':'SimpleStrategy', 'replication_factor' : 1}
AND durable_writes = false;

USE test;

CREATE TABLE reviews (
  id int primary key,
  shoeID int,
  author text,
  title text,
  body text,
  stars int,
  createdAt timestamp
  
-- PRIMARY ID(nameid)
);
COPY reviews (id,shoeID,author,title,body,stars,createdAt) FROM '/Users/svetlanakhan/Desktop/SDCproject/Review-Service/server/nonrelational/reveiws2.csv' WITH DELIMITER = ',' AND HEADER = FALSE;
