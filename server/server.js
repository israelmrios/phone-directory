const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./config/connection');

connectDB();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/departments', require('./routes/departmentRoutes'));

app.listen(PORT, () => console.log(`Now listening on localhost:${PORT}`));
