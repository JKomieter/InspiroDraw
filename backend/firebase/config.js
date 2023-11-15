const { initializeApp } = require('firebase/app');
const { getAuth } = require('firebase/auth');
const { getFirestore } = require("firebase/firestore");


const firebaseConfig = {

};

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const db = getFirestore(firebase);

module.exports = {
    firebase,
    auth,
    db
}
