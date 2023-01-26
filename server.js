const express = require('express');
const connectDB = require('./config/db');
const path = require('path')

const app = express();

// Connect Database
connectDB();

// Initialize Middleware
app.use(express.json({ extended: false }))

// define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/customer', require('./routes/api/customer'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/property', require('./routes/api/property'));
app.use('/api/post-file', require('./routes/api/post-file'));
app.use('/api/inquiry', require('./routes/api/inquiry'));
app.use('/api/booking', require('./routes/api/booking'));


// Serve static assets in production
// if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static(path.join(__dirname, './client/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, './client/build/index.html'));
    })
// }

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));