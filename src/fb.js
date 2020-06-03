import * as firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyCLvUXewtoRZAHqSwCbiAJuefp54kWANTk',
  authDomain: 'inusual-465f8.firebaseapp.com',
  databaseURL: 'https://inusual-465f8.firebaseio.com/',
  storageBucket: 'inusual-465f8.appspot.com',
  messagingSenderId: '8Da5Wi9ZzTx4RMUZu007'
}

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
