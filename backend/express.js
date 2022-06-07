const express = require("express");
const app = express();
const mysql = require('mysql2');
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
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


app.post("/create2", (req, res) => {
 
    const leto = req.body.leto;
    const uvoz = req.body.uvoz;
  
    db.query(
      "INSERT INTO elektricna_energija_za_uvoz (leto, uvoz) VALUES (?,?)",
      [leto, uvoz],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send("Values Inserted");
        }
      }
    );
  });

app.get("/stats2", (req, res) => {
    db.query("SELECT * FROM elektricna_energija_za_uvoz", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });


  app.get("/stats3", (req, res) => {
    db.query("SELECT * FROM delez_energije_za_ograjevanje_prostorov", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });


  app.get("/stats4", (req, res) => {
    db.query("SELECT * FROM delez_energije_za_ogrevanje_sanitarne_vode", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });
  
  app.get("/stats5", (req, res) => {
    db.query("SELECT * FROM gorivo_cestni_javni_linijski_prevoz", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

  app.get("/stats6", (req, res) => {
    db.query("SELECT * FROM lastna_raba_na_elektricna_energija", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

  app.get("/stats7", (req, res) => {
    db.query("SELECT * FROM elektricna_energija_za_izvoz", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

  app.get("/stats8", (req, res) => {
    db.query("SELECT * FROM gorivo_medkrajevni_javni_linijski_prevoz", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

  app.get("/stats9", (req, res) => {
    db.query("SELECT * FROM gorivo_mednarodni_javni_linijski_prevoz", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

  app.get("/stats10", (req, res) => {
    db.query("SELECT * FROM elektricna_energija_vo_slovenija_mesecno", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

  app.get("/stats11", (req, res) => {
    db.query("SELECT * FROM lastna_raba_na_elektricna_energija_hidroelektrane", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

  app.get("/stats12", (req, res) => {
    db.query("SELECT * FROM lastna_raba_na_elektricna_energija_jedrska_elektrana", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

  app.get("/stats13", (req, res) => {
    db.query("SELECT * FROM lastna_raba_na_elektricna_energija_termoelektrane", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

  app.get("/stats14", (req, res) => {
    db.query("SELECT * FROM letna_proizvodnja_na_generatorju_hidroelektrane", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

  app.get("/stats15", (req, res) => {
    db.query("SELECT * FROM letna_proizvodnja_na_generatorju_jedrska_elektrana", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

  app.get("/stats16", (req, res) => {
    db.query("SELECT * FROM letna_proizvodnja_na_generatorju_termoelektrane", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

  app.get("/stats17", (req, res) => {
    db.query("SELECT * FROM proizvodnja_na_generatorju_hidroelektrane", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

  app.get("/stats18", (req, res) => {
    db.query("SELECT * FROM proizvodnja_na_generatorju_jedrska_eletrana", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

  app.get("/stats19", (req, res) => {
    db.query("SELECT * FROM proizvodnja_na_generatorju_termoelektrane", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

  app.get("/stats20", (req, res) => {
    db.query("SELECT * FROM proizvodnja_na_pragu_skupaj", (err, result) => {
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
