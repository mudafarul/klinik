const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Welcome to the Klinik application!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Connect to MongoDB (adjust the connection string as needed)
mongoose.connect('mongodb://localhost:27017/klinik', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));
bash
npm start
