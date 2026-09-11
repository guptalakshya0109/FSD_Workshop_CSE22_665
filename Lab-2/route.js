const express = require('express');
const app = express();

app.use(express.json());
let students = {
    id: 1,
    name: "Rohan",
    rollno: 20,
    email: "ab@example.com",
    course: "BCA"
};

// GET(display)
app.get('/student', (req, res) => {
    res.send(students);
});


//POST(Insert)
app.post('/student', (req, res) => {
    student = {...students, ...req.body};
    res.send("student updated succesfully ");
});

//PUT(Update)
app.put('/student', (req, res) => {
    students = {...students, ...req.body};
    res.send("student updated succesfully ");
});

//DELETE
app.delete('/student', (req, res) => {
    students = {};
    res.send("student deleted succesfully ");
});
app.listen(4000, () => {
    console.log("Server running at http://localhost:4000");
});