const { firebase, auth } = require("../firebase/config");
const { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } = require("firebase/auth");
const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.secretOrPublicKey;

let Token;

const generateToken = (id, email) => {
    const payload = {
        id,
        email
    };
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });

    return token;
}


module.exports.signup = async (req, res) => {
    try {
        const { username, password, email } = req.body;
        const user = await createUserWithEmailAndPassword(auth, email, password);
        Token = generateToken(user.user.uid, user.user.email);
        res.status(200).json({
            email: user.user.email,
            photoUrl: user.user.photoURL,
            token: Token
        });
    } catch (error) {
        console.log("Failed to signup user:", error);
        res.status(400).json({ message: "Failed to signup user" });
    }
};


module.exports.signupgoogle = async (req, res) => {
    
}


module.exports.login = async (req, res) => {
    try {
        const { username, password, email } = req.body;
        const user = await createUserWithEmailAndPassword(auth, email, password);
        Token = generateToken(user.user.uid, user.user.email);
        res.status(200).json({
            email: user.user.email,
            photoUrl: user.user.photoURL,
            token: Token
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Failed to login user" });
    }
};

module.exports.logout = async (req, res) => {};

module.exports.checkAuth = async (req, res) => {};