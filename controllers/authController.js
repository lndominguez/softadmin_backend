import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
import axios from 'axios';
import bcryptjs from 'bcryptjs';



async function register(req, res) {
    // Auth with google api
    if (req.body.googleAccessToken) {
        axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
            headers: {
                "Authorization": `Bearer ${req.body.googleAccessToken}`,
            }
        }).then(async response => {
            const { email, given_name, family_name, picture } = response.data;
            const alreadyExistUser = await User.findOne({ email });
            if (alreadyExistUser) {
                return res.status(400).json({
                    message: "User already exist"
                })
            }
            const result = await User.create({ firstName: given_name, lastName: family_name, email: email, avatarUrl: picture })
            const token = jwt.sign({ email: result.email, id: result._id }, 'secreto', { expiresIn: '1h' });

            res.status(200).json({
                accessToken: token, user:result
            })

        }).catch(err => {
            res.status(400).json({
                message: "Invalid Info"
            })
        })

    } else
    // Auth with JWT
    {
        const { firstName, lastName, email, password } = req.body

        try {
            const userFound = await User.findOne({ email })
            if (userFound) return res.status(401).json({ message: 'This email has been taken' })
            const hashedPassword = await bcryptjs.hash(password, 10);
            const newUser = new User({
                firstName,
                lastName,
                email,
                password: hashedPassword
            })
            const userSaved = await newUser.save()
            const token = jwt.sign({ email: userSaved.email, id:userSaved._id}, 'secreto', { expiresIn: '1h' });

            return res.json({
                accessToken: token, user: userSaved
            })
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    }
}


async function login(req, res) {
    // console.log("***************** LOGIN ****************")
    // console.log("access_token :",req.body)
    if (req.body.googleAccessToken) {
        axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
            headers: {
                "Authorization": `Bearer ${req.body.googleAccessToken}`
            }
        }).then(async response => {
            const { email } = response.data;
            const alreadyExistUser = await User.findOne({ email });
            if (!alreadyExistUser) {
                return res.status(400).json({ message: "User don't exist!" })
            }
            const token = jwt.sign({ email: alreadyExistUser.email, id: alreadyExistUser._id }, 'secreto', { expiresIn: '1h' });
            return res.json({
                accessToken: token, user: alreadyExistUser
            })

        }).catch(err => {
            res.status(400).json({
                message: "Invalid Info to Login"
            })
        })

    } else {
        const { email, password } = req.body;

        try {
            const alreadyExistUser = await User.findOne({ email });

            if (alreadyExistUser && await bcryptjs.compare(password, alreadyExistUser.password)) {
                const token = jwt.sign({ email:alreadyExistUser.email, id:alreadyExistUser._id }, 'secreto', { expiresIn: '1h' });
                return res.json({
                    accessToken: token, user: alreadyExistUser
                })
            } else {
                return res.status(401).json({ message: 'Credenciales inválidas' });
            }
        } catch (error) {

        }

    }
}

async function getCurrentUser(req, res) {
   
    if (req.body.googleAccessToken) {
        axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
            headers: {
                "Authorization": `Bearer ${req.body.googleAccessToken}`
            }
        }).then(async response => {
            const { email } = response.data;
            const alreadyExistUser = await User.findOne({ email });
            if (!alreadyExistUser) {
                return res.status(400).json({ message: "User don't exist!" })
            }
            const token = jwt.sign({ email: alreadyExistUser.email, id: alreadyExistUser._id }, 'secreto', { expiresIn: '1h' });
            return res.json({
                accessToken: token, user: alreadyExistUser
            })

        }).catch(err => {
            res.status(400).json({
                message: "Invalid Info to Login"
            })
        })

    } else {
        const { accessToken } = req.body;
        const decodedToken = jwt.verify(accessToken, 'secreto');
        const { email } = decodedToken;
        try {
            const alreadyExistUser = await User.findOne({ email });

            if (alreadyExistUser) {
                const token = jwt.sign({ email:alreadyExistUser.email, id:alreadyExistUser._id }, 'secreto', { expiresIn: '1h' });
                return res.json({
                    accessToken: token, user: alreadyExistUser
                })
            } else {
                return res.status(401).json({ message: 'Credenciales inválidas' });
            }
        } catch (error) {

        }

    }
}


export { register, login, getCurrentUser };
