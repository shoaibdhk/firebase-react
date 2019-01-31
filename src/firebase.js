import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyCRtYLE1Oao3ECPlhea3Y9YQNt2eorTstU',
  authDomain: 'test-65385.firebaseapp.com',
  databaseURL: 'https://test-65385.firebaseio.com',
  projectId: 'test-65385',
  storageBucket: 'test-65385.appspot.com',
  messagingSenderId: '439481704520'
};
firebase.initializeApp(config);
const firestore = firebase.firestore();

export default firestore;
