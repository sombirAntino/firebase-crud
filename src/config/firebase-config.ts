import { FirebaseApp, initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore/lite';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyDisV2XI9PEVtguBbEYZCFWfd2gb0hwz5A',
    authDomain: 'learning-bd088.firebaseapp.com',
    projectId: 'learning-bd088',
    storageBucket: 'learning-bd088.appspot.com',
    messagingSenderId: '349186087356',
    appId: '1:349186087356:web:559747655f209a5847f3b9',
    measurementId: 'G-NVQJJGPX3J',
};

const app: FirebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(app);
const user = collection(db, 'Users');

export default user;
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
