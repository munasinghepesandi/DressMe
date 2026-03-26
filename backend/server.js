import express from 'express';
import dotenv from 'dotenv';
import { connctDB } from './config/db.js';

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

connctDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


