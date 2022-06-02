const express = require("express");
const app = express();
const mysql = require('mysql2');
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "markodoca1",
  database: "praktikum",
});

app.post("/create", (req, res) => {
 
  const leto = req.body.leto;
  const proizvodnja = req.body.proizvodnja;

  db.query(
    "INSERT INTO elektricna_energija_vo_slovenija_letno (leto, proizvodnja) VALUES (?,?)",
    [leto, proizvodnja],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.get("/stats", (req, res) => {
  db.query("SELECT * FROM elektricna_energija_vo_slovenija_letno", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("Your server is running on port 3001");
});
