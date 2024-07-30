const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const { cookie, decodedUser } = require('../utilities/auth')


exports.register = async (req, res, next) => {

    try {
        const { name, email, password } = req.body;

        if (!email || !password || !name) {
            return res.json({
                success: false,
                message: "Please Enter all details"
            })
        }

        let user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({
                success: false,
                message: "User Already Register"
            })
        }

        const hashedPassword = await bcrypt.hash(toString(password), 10);
        user = await User.create({ name, email, password: hashedPassword });
        console.log(hashedPassword)
        const token = await cookie({ id: user._id });

        return res.cookie('_token', token).status(201).json({
            success: true,
            message: "User Register Successfully"
        })


    } catch (err) {
        console.log(err);
    }

}

exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email }).select('+password');

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Please enter correct email and password"
            })
        }

        const isMatched = await bcrypt.compare(toString(password), user.password);
        console.log(isMatched) //Error occurs (always true return)

        if (isMatched) {

            const token = await cookie({ id: user._id });

            return res.cookie('_token', token).status(200).json({
                success: true,
                message: "Login Successfully"
            })
        }

        return res.status(401).json({
            success: false,
            message: "Please enter correct email and password"

        })



    } catch (error) {
        console.log(error);
    }
}

exports.profile = async (req, res, next) => {
    try {
        const { _token } = req.cookies;

        if (_token) {
            const { id } = await decodedUser(_token);
            const user = await User.findOne({ _id: id })

            if (user) {
                res.status(200).json({
                    success: true,
                    message: `Welcome ${user.name}`
                });
            }
            res.status(402).json({
                success: false,
                message: "Login first"
            })
        }

        res.status(401).json({
            success: false,
            message: "Login first"
        })
    } catch (err) {
        console.log(err);
    }
}

exports.logout = (req, res, next) => {
    res.cookie("_token", "").status(200).json({
        success: true,
        message: "Logout Successfully"
    })
}
