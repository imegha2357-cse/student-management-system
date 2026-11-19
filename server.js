const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const students = [
  { id: 1, name: "Megha", department: "CSE" },
  { id: 2, name: "Sujey", department: "CSE" },
  { id: 3, name: "Arun", department: "IT" }
];

app.get("/students", (req, res) => {
  res.json(students);
});

app.get("/", (req, res) => {
  res.send("Student API is running!");
});

app.listen(5000, "0.0.0.0", () => {
  console.log("Backend running on port 5000");
});
