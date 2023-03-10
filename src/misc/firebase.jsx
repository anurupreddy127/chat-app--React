import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyDwaR9Bm_t97AxA6Sc-DNelCcucKeyVVeY',
  authDomain: 'chat-web-app-227b4.firebaseapp.com',
  databaseURL:
    'https://chat-web-app-227b4-default-rtdb.europe-west1.firebasedatabase.app/',
  projectId: 'chat-web-app-227b4',
  storageBucket: 'chat-web-app-227b4.appspot.com',
  messagingSenderId: '1079508504802',
  appId: '1:1079508504802:web:a3b37033efe58af5560ebb',
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
