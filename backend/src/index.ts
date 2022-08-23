import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config';

import databaseUri from './config/db.config';
import { expressPort, apiUrlPrefix } from './config/app.config';
import todoRouter from './router/todoRouter';

const app = express();

app.use(cors());

// Connect to the database
mongoose
  .connect(databaseUri)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// Load routes
app.use(`${apiUrlPrefix}/todo`, todoRouter);

// Start the server
app.listen(expressPort, () => {
  console.log(`Express server listening on port ${expressPort}`);
});
