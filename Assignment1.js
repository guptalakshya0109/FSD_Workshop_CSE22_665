// Question 1: Create a simple event emitter that emits an event when a school bell rings. The event should trigger a callback function that logs a message to the console indicating that the class has started or ended.
const EventEmitter = require('events');
const schoolBell = new EventEmitter();
schoolBell.on('classStart', () => {
 console.log('Class has started!');
});
schoolBell.on('classEnd', () => {
 console.log('Class has ended!');
});
// Trigger the school bell events
schoolBell.emit('classStart');
schoolBell.emit('classEnd');
console.log('Program started');
setTimeout(() => {
 console.log('setTimeout: Ring bell');
}, 0);
setImmediate(() => {
 console.log('setImmediate: Ring bell');
});
process.nextTick(() => {
 console.log('process.nextTick: Ring bell');
});
console.log('Program ended');

//Question 2: To maintain a student attendance list in attendance.txt by adding, displaying, updating, and deleting student
//names using Node.js file-system operations.\
const fs = require('fs');
const fileName = 'attendance.txt';
function readNames() {
 if (!fs.existsSync(fileName)) {
 fs.writeFileSync(fileName, '');
 }
 const data = fs.readFileSync(fileName, 'utf8');
 return data.split('\n').filter(name => name.trim() !== '');
}function saveNames(names) {
 fs.writeFileSync(fileName, names.join('\n'));
}
function addStudent(name) {
 const names = readNames();
 names.push(name);
 saveNames(names);
 console.log(name + ' added successfully.');
}
function showStudents() {
 const names = readNames();
 console.log('Attendance List:');
 if (names.length === 0) {
 console.log('No students found.');
 } else {
 names.forEach((name, index) => {
 console.log((index + 1) + '. ' + name);
 });
 }
}
function updateStudent(oldName, newName) {
 const names = readNames();
 const index = names.findIndex(
 name => name.toLowerCase() === oldName.toLowerCase()
 );
 if (index === -1) {
 console.log('Student not found.');
 return;
 }
 names[index] = newName;
 saveNames(names);
 console.log(oldName + ' updated to ' + newName + '.');
}
function deleteStudent(name) {
 const names = readNames();
 const updatedNames = names.filter(
 student => student.toLowerCase() !== name.toLowerCase()
 );
 if (updatedNames.length === names.length) {
 console.log('Student not found.');
 return;
 }
 saveNames(updatedNames);
 console.log(name + ' deleted successfully.');
}
// Demonstration of all four operations
addStudent('Aman');
addStudent('Riya');
showStudents();
updateStudent('Aman', 'Aman Sharma');
deleteStudent('Riya');
showStudents();
//question :3  To create a simple Node.js HTTP server for a tea stall that responds with the message “Welcome to
//NodeJS!” and HTTP status code 200.
const http = require('http');
const server = http.createServer((req, res) => {
 res.writeHead(200, { 'Content-Type': 'text/plain' });
 res.end('Welcome to NodeJS!');
});
server.listen(3000, () => {
 console.log('Tea stall server is running at http://localhost:3000');
});
//Question 4:  To create to-do list routes for viewing, adding, completing, and deleting tasks using an array without a
//database.
const express = require('express');
const app = express();
app.use(express.json());
let tasks = [
 { id: 1, title: 'Complete assignment', completed: false },
 { id: 2, title: 'Revise Node.js', completed: false }
];
// GET: display all tasks
app.get('/tasks', (req, res) => {
 res.status(200).json(tasks);
});
// POST: add a new task
app.post('/tasks', (req, res) => {
 const { title } = req.body;
 if (!title) {
 return res.status(400).json({ message: 'Task title is required' });
 }
 const newTask = {id: tasks.length ? Math.max(...tasks.map(t => t.id)) + 1 : 1,
 title: title,
 completed: false
 };
 tasks.push(newTask);
 res.status(201).json(newTask);
});
// PUT: mark a task as completed
app.put('/tasks/:id', (req, res) => {
 const task = tasks.find(t => t.id === Number(req.params.id));
 if (!task) {
 return res.status(404).json({ message: 'Task not found' });
 }
 task.completed = true;
 res.status(200).json(task);
});
// DELETE: remove a task
app.delete('/tasks/:id', (req, res) => {
 const index = tasks.findIndex(t => t.id === Number(req.params.id));
 if (index === -1) {
 return res.status(404).json({ message: 'Task not found' });
 }
 const removedTask = tasks.splice(index, 1)[0];
 res.status(200).json({
 message: 'Task deleted successfully',
 task: removedTask
 });
});
app.listen(3000, () => {
 console.log('To-do API running at http://localhost:3000');
});