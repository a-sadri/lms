import express from 'express';
import dotenv from 'dotenv';

import routes from './routes/v1/index.js';

// Configurations
dotenv.config()
const app = express()

// v1 api routes
app.use('/v1', routes)

// Setup Server
const PORT = process.env.PORT || 5001
app.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT}`);
})