const express = require('express');
const users = require('./routes/users');
const auth = require('./routes/auth');
const contacts = require('./routes/contacts');
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

// Init middleware
app.use(express.json({ extended: false }));

app.get('/', (request, response) =>
    response.json({ message: 'Welcome to the Contact Keeper API...' })
);

// Define routes
app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/contacts', contacts);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on Port: ${PORT}`));
