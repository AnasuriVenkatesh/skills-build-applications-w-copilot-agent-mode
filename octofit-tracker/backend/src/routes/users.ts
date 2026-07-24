import { Router } from 'express';
import { User } from '../models/user';

const router = Router();

router.get('/api/users', async (_req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

export default router;
