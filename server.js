// server.js

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Endpoint for fetching available cities
app.get('/cities', (req, res) => {
  // Replace this with logic to fetch cities from your database
  const cities = ['New York', 'Los Angeles', 'Chicago', 'San Francisco'];
  res.json(cities);
});

// Endpoint for handling car rental requests
app.post('/rent-car', (req, res) => {
  // Replace this with logic to handle car rental requests
  const { startDate, endDate, city } = req.body;
  // Process the rental request and return a response
  res.json({ message: 'Car rental request received', startDate, endDate, city });
});

// Endpoint for handling sharing car requests
app.post('/share-car', (req, res) => {
  // Replace this with logic to handle sharing car requests
  const { origin, destination, seatsAvailable } = req.body;
  // Process the sharing car request and return a response
  res.json({ message: 'Car sharing request received', origin, destination, seatsAvailable });
});

// Endpoint for handling contact form submissions
app.post('/contact', (req, res) => {
  // Replace this with logic to handle contact form submissions
  const { name, email, message } = req.body;
  // Process the contact form submission and return a response
  res.json({ message: 'Contact form submitted', name, email, message });
});

// Endpoint for handling user authentication
app.post('/login', (req, res) => {
  // Replace this with logic to handle user authentication
  const { username, password } = req.body;
  // Authenticate user credentials and return a response
  res.json({ message: 'User logged in', username });
});

// Endpoint for handling user registration
app.post('/register', (req, res) => {
  // Replace this with logic to handle user registration
  const { username, email, password } = req.body;
  // Register the user and return a response
  res.json({ message: 'User registered successfully', username, email });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
