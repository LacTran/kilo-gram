import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCGq6UGG6lchMwIk8i73whc_c7qMR30KnA",
    authDomain: "kilo-gram.firebaseapp.com",
    databaseURL: "https://kilo-gram.firebaseio.com",
    projectId: "kilo-gram",
    storageBucket: "kilo-gram.appspot.com",
    messagingSenderId: "663572185329",
    appId: "1:663572185329:web:f002d33e9d069e5ef0a950"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

// create firestore timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {
    projectStorage,
    projectFirestore,
    timestamp
}