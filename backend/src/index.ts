import express from 'express';

const app: express.Application = express();

// TODO move to env file with dotenv
const port = 8080;

app.get('/', (_req, res) => {
  res.send('Hello, world!');
});

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
