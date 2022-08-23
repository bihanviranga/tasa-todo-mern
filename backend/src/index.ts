import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';

import databaseUri from './config/db.config';
import expressPort from './config/app.config';

const app: express.Application = express();

mongoose.connect(databaseUri).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

app.get('/', (_req, res) => {
  res.send('Hello, world!');
});

app.listen(expressPort, () => {
  console.log(`Express server listening on port ${expressPort}`);
});
