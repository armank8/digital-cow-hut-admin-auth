import express from 'express';
import { createAdmin } from './admin.controller';

const router = express.Router();

router.post('/create-admin',createAdmin)
router.post('/login')


export default router;



