const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

const db = mysql.createPool({
  host: "ec2-54-164-93-115.compute-1.amazonaws.com",
  user: "bigodao",
  password: "Igorbigode8!",
  database: "test",
});

app.use(express.json());
app.use(cors());

app.post("/search", (req, res) => {
  const { name } = req.body;
  const { cost } = req.body;
  const { category } = req.body;

  let mysql =
    "SELECT * from test2 where user = ?";
  db.query(mysql, [name, cost, category], (err, result) => {
    if (err) res.send(err);
    res.send(result);
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