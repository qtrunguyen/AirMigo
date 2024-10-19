import express from 'express';
import dotenv from 'dotenv';
import { signUpUser } from './core/auth/signup.js';
import { logInUser } from './core/auth/login.js';

signUpUser('test', 'password')
logInUser('test', 'password')

const app = express();
app.use(express.json()); 

// Sign-up route
app.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    try {
        const result = await signUpUser(username, password);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Login route
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const result = await logInUser(username, password);
        res.status(200).json(result);
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
});

// Start the server
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});