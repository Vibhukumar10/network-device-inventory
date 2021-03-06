import firebase from "firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyDSDZddOyEcWgb6JdZ-pgKrLl6uLA9yQJg",
//   authDomain: "network-v1.firebaseapp.com",
//   projectId: "network-v1",
//   storageBucket: "network-v1.appspot.com",
//   messagingSenderId: "979053249248",
//   appId: "1:979053249248:web:f9f85b656604f9b548c685",
// };

const firebaseConfig = {
  apiKey: "AIzaSyCWwtDMdxLNSvMu0mu8XMQCXyXkqvekexo",
  authDomain: "network-v2.firebaseapp.com",
  projectId: "network-v2",
  storageBucket: "network-v2.appspot.com",
  messagingSenderId: "303307477877",
  appId: "1:303307477877:web:ae3f4ac48e3607528ef93c",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
