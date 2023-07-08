import express from 'express';
import { createAdmin, loginAdmin } from './auth.controller';

const router = express.Router();

router.post('/create-admin',createAdmin)
router.post('/login',loginAdmin)


export default router;



