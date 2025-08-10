import express from 'express';
import { getRandomProblem } from '@data/problems';

const router = express.Router();

router.get('/', (req, res) => {
  const problem = getRandomProblem();
  res.json(problem);
});

export default router;