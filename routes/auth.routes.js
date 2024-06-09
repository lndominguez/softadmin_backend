import express from 'express';
import bodyParser from 'body-parser';
import { register, login, getCurrentUser } from '../controllers/authController.js';
import passport from 'passport';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();
router.use(bodyParser.json());

router.post('/auth/me', getCurrentUser);
router.post('/auth/login', login);
router.post('/auth/register', register);

// Google authentication
router.get('/auth/google', passport.authenticate("google", { scope: ['profile'] }));
router.get('/auth/google/callback', passport.authenticate("google", { 
    successRedirect: process.env.CLIENT_HOST, 
    failureRedirect:"/auth/login/failed"
}));

export default router;
