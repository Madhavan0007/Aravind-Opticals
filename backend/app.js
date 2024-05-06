const express = require('express');
const { connectToDatabase } = require('./server.js'); 
const productRouter = require('./routes/productRouter'); // Import the product router
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;

require('dotenv').config();
app.use(express.json());
app.use(cors());
// Middleware
app.use(express.urlencoded({ extended: true }));
// app.use(express.static('public'));

// Connect to MongoDB database
connectToDatabase()
    .then(() => {
        console.log('Connected to MongoDB');
        // Mount product router after successful connection
        app.use('/', productRouter);

        // Start the server
        app.listen(port, () => console.log(`Server is running on port ${port}`));
    })
    .catch(err => {
        console.error('Error connecting to MongoDB:', err);
    });
