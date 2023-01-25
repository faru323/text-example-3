const express = require("express");
const app = express();
const PORT = 8080;
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(bodyParser());
app.use(cors());
const mongoose = require("mongoose");



const studentSchema = new mongoose.Schema({
  name: String,
  description: String,
  price:Number
});

const StudentModel = mongoose.model("Student", studentSchema);

mongoose.set("strictQuery", false);
main().catch((err) => console.log(err));
async function main() {
  await mongoose
    .connect(
      "mongodb+srv://Fatima:bAKHE5IN2imOEtCA@nft-cluster.lkpcrzn.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => console.log("Connected to database"))
    .catch((err) => console.error(err));
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.get("/api/student", (req, res) => {
  StudentModel.find(req.params, (err, student) => {
    if (err) return res.status(500).send({ err });
    res.send(student);
  });
});

app.post("/api/student", (req, res) => {
  let newStudent = new StudentModel({ ...req.body });
  newStudent.save();
  res
    .status(201)
    .send({ message: "Student succesfully added!", student: newStudent });
});

app.delete("/api/student/:id", (req, res) => {
if (req.params.id)
StudentModel.findByIdAndDelete(req.params.id,(err,student)=> {
    if(err)return res.status(500).send({err});
    res.send(student);
})



})




app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
