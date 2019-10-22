import { getMoods } from '../controllers/moodController';
import { Router } from 'express';

const router = Router();

router.get('/', getMoods);

export default router;
