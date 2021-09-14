import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDlkHe4-Ag_eFqYWBFpZvozw6MnMw4s7qE",
    authDomain: "crwn-db-51a12.firebaseapp.com",
    projectId: "crwn-db-51a12",
    storageBucket: "crwn-db-51a12.appspot.com",
    messagingSenderId: "579740584844",
    appId: "1:579740584844:web:44b1b0607e7d50ce7ca4a9"
  };

  export const createUserProfileDocument = async(userAuth, additionalData) => {
      if(!userAuth) return;

      const userRef = firestore.doc(`users/${userAuth.uid}`);
      const snapShot = await userRef.get();  //snapShot represent data
      console.log(snapShot)

      if(!snapShot.exists){
          const {displayName, email} = userAuth;
          const createdAt = new Date();

          try{
              await userRef.set({
                  displayName,
                  email,
                  createdAt,
                  ...additionalData
              })
          }
          catch(error){
            console.log(error.message);
          }
      }
      return userRef;
  }

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}else {
    firebase.app(); 
 }

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: 'select_account'
  });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;

