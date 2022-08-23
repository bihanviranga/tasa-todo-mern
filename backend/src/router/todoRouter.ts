import { Router } from 'express';

const router = Router();

router.get('/', (_req, res) => {
  res.send('todo GET');
});

router.post('/', (_req, res) => {
  res.send('todo POST');
});

router.patch('/', (_req, res) => {
  res.send('todo PATCH');
});

router.delete('/', (_req, res) => {
  res.send('todo DELETE');
});

export default router;
