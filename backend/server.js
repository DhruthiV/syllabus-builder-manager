require('dotenv').config();

const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();
connectDB();

app.use(express.json())
app.use(cors())

const syllabusRoutes = require('./routes/SyllabusRoutes')
app.use('/api/syllabus', syllabusRoutes)
app.get('/', (req, res) => { 
    res.send('API is running...')
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))