const express = require("express");
const bodyParser = require("body-parser");
const { Client, Pool } = require("pg");
const path = require("path");
const PORT = 3004;
const connectionString =
  "postgres://svetlanakhan:lana1234@localhost:5432/nikie";

const pgConnection = new Client(connectionString);

pgConnection.connect();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../public/')));

app.get("/:shoeID/reviews", (req, res) => {
  const { shoeID } = req.params;
  const query = {
    text: "SELECT * FROM review WHERE shoeid = $1",
    values: [shoeID]
  };
  pgConnection
    .query(query)
    .then(result => {
      res.send(result.rows);
    })
    .catch(e => {
      res.send(e);
    });
});

app.post("/reviews", (req, res) => {
  // console.log(req.body.shoeid);
  const query = {
    text: "INSERT INTO review(shoeid, author, title, body, stars, createdat) VALUES ($1, $2, $3, $4, $5, now())",
    values: [req.body.shoeid, req.body.author, req.body.title, req.body.body, req.body.stars]
  };
  pgConnection
    .query(query)
    .then(result => {
      res.send(result.rows);
    })
    .catch(e => {
      res.send(e);
    });
});

app.put('/reviews/:id', function(req, res, next){
  console.log('put', req.body);
  const query = {
    text: "UPDATE review SET shoeid=($1), author=($2), title=($3), body=($4), stars=($5), createdat=now() WHERE _id=($6)",
    values: [req.body.shoeid, req.body.author, req.body.title, req.body.body, req.body.stars,req.params.id]
  };
  pgConnection
    .query(query)
    .then(result => {
      res.send(result.rows);
    })
    .catch(e => {
      res.send(e);
    });
});

app.delete('/reviews/:id', function(req, res, next){
  const query = {
    text: "DELETE FROM review WHERE _id=($1)",
    values: [req.params.id]
  };
  pgConnection
    .query(query)
    .then(result => {
      res.send(result.rows);
    })
    .catch(e => {
      res.send(e);
    });
});

app.listen(PORT, () => console.log(`listening on port: ${PORT}`));
