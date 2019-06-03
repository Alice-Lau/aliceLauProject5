import firebase from 'firebase';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAiIdT9ARtxqDf5FIZRDCh87ZnT8ubgwlI",
    authDomain: "alicelauprojectfive.firebaseapp.com",
    databaseURL: "https://alicelauprojectfive.firebaseio.com",
    projectId: "alicelauprojectfive",
    storageBucket: "",
    messagingSenderId: "473202138470",
    appId: "1:473202138470:web:4eb2855290167f80"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;