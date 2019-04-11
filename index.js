const express = require("express");
const app = express();
const PORT = 5050;

const students = [{ id: 1, name: "Jonathon", hometown: "Dallas" }];

app.get("/api/students", (req, res) => {
  res.json(students);
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
