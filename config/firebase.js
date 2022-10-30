import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import Constants from 'expo-constants';

const firebaseConfig = {
  apiKey: Constants.manifest.extra.apiKey,
  authDomain: Constants.manifest.extra.authDomain,
  projectId: Constants.manifest.extra.projectID,
  storageBucket: Constants.manifest.extra.storageBucket,
  messagingSenderId: Constants.manifest.extra.messagingSenderId,
  appId: Constants.manifest.extra.appId,
};


let Firebase;

if (firebase.apps.length === 0) {
  Firebase = firebase.initializeApp(firebaseConfig);
}

export const  auth  = firebase.auth();

export default Firebase;