require("dotenv").config()
const express = require("express");
const massive = require("massive")
const app = express();
const PORT = 5050;

massive(process.env.CONNECTION_STRING).then(dbInstance => {
  app.set('db', dbInstance);
  console.log("Database connected")
  // dbInstance.initialSetup().then(result => {  //because we already did the initial setup
  //   console.log(result)
  // })
})

app.use(express.json())

app.get("/api/students", (req, res) => {
  let db = req.app.get("db")
  db.getStudents().then(result => {
    res.json(result)
  })
});

app.post("/api/students", (req, res) => {
  req.app.get('db').addStudent([req.body.name, req.body.hometown]).then(result => {
    res.json(result)
  })
})

app.put("/api/students/:id", (req, res) => {
  req.app.get('db').updateStudent([req.body.hometown, req.params.id]).then(result => {
    res.json(result)
  })
})

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
