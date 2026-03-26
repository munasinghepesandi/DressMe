import express from 'express';
import User from '../models/User.js';



const router = express.Router();

router.post('/register', async(req, res) => {
    const { username, email, password } = req.body;

    try{
        if(!username || !email || !password){
            return res.status(400).json({ message: 'Please provide all required fields.' });
        }

        const userExists = await User.findOne({ email });
        if(userExists){
            return res.status(400)
            .json({ message: 'User already exists.' });
        }

    }catch(err){
        res.status(500).json({ message: 'Server error' })
    }
});

router.post('/login', async(req, res) => {
    const { email, password } = req.body;
    try{
        if(!email || !password){
            return res.status(400).json({ message: 'Please fill the required fields.' });
        }
        const user = await User.findOne({ email });
        if(!user){
            return res.status(400).json({ message: 'Invalid credentials.' });
        }
        const isMatch = await user.matchPassword(password);
        if(!isMatch){
            return res.status(400).json({ message: 'Invalid credentials.' });
        }
        res.status(200).json({ message: 'Login successful.' });
    }catch(err){
        res.status(500).json({ message: 'Server error' })
    }
});
export default router;

