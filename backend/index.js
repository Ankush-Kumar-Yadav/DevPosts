const express = require('express');
const server = express();
const router = require('./routes/PostRouter');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const database = require('./db/database');
const cors = require('cors');

// Load environment variables
dotenv.config();

// Middleware
server.use(express.json());
server.use(cookieParser());
const corsOptions = {
    origin: 'http://localhost:5173', // Replace with your frontend URL (no trailing slash)
    credentials: true, // Allow credentials (cookies) to be sent
};

server.use(cors(corsOptions)); // Correctly use cors middleware


// Routes
server.use('/api', router);

// Start server
const port = process.env.PORT || 8000;
server.listen(port, async () => {
    console.log("Server is listening on port " + port);
    await database(); // Ensure database connection is established
});
