const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
 res.send(`
 <!DOCTYPE html>
 <html>
 <head>
 <title>Sweet Crumbs Bakery - Home</title>
 <link rel="stylesheet" href="/style.css">
 </head>
 <body>
 <header><h1>Sweet Crumbs Bakery</h1></header>
 <main>
 <h2>Welcome to Sweet Crumbs Bakery!</h2>
 <p>Freshly baked happiness, made with love.</p>
 <nav>
 <a href="/">Home</a>
 <a href="/menu">Menu</a>
 <a href="/contact">Contact</a>
 </nav>
 </main>
 </body>
 </html>
 `);
});
app.get('/menu', (req, res) => {
 res.send(`
 <!DOCTYPE html>
 <html>
 <head>
 <title>Our Menu</title>
 <link rel="stylesheet" href="/style.css">
 </head>
 <body>
 <header><h1>Our Bakery Menu</h1></header>
 <main><ul>
 <li>Chocolate Cake - Rs. 450</li>
 <li>Black Forest Cake - Rs. 500</li>
 <li>Chocolate Pastry - Rs. 60</li>
 <li>Veg Puff - Rs. 30</li>
 </ul>
 <nav><a href="/">Home</a> <a href="/contact">Contact</a></nav>
 </main>
 </body>
 </html>
 `);
});
app.get('/contact', (req, res) => {
 res.send(`
 <!DOCTYPE html>
 <html>
 <head>
 <title>Contact Us</title>
 <link rel="stylesheet" href="/style.css">
 </head>
 <body>
 <header><h1>Contact Sweet Crumbs Bakery</h1></header>
 <main>
 <p>Phone: 9876543210</p>
 <p>Address: Shop No. 12, Main Market, Ghaziabad, Uttar Pradesh</p>
 <nav><a href="/">Home</a> <a href="/menu">Menu</a></nav>
 </main>
 </body>
 </html>
 `);
});
app.listen(3000, () => {
 console.log('Bakery website running at http://localhost:3000');
});