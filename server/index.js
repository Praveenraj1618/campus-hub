const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected successfully.'))
  .catch(err => console.error('MongoDB connection error:', err));

app.get('/', (req, res) => {
  res.send('API is running...');
});

//Routes
app.use('/api/users', require('./routes/userRoutes'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});