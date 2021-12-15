const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

const db = mysql.createPool({
  host: "ec2-34-205-125-254.compute-1.amazonaws.com",
  user: "bigodao",
  password: "Igorbigode8!",
  database: "test",
});

app.use(express.json());
app.use(cors());

var user =  

app.get("/getView", (req, res) => {
  let mysql = "SELECT * FROM viewEventos ";
  db.query(mysql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/getUser/:user", (req, res) => {
  const user = req.params.user;
  db.query("SELECT * FROM viewEventos WHERE `user` = ?;", user, (err, result) => {
if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/getUsers", (req, res) => {
  let mysql = "SELECT * FROM test2";
  db.query(mysql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("rodando na porta 3001");
});
