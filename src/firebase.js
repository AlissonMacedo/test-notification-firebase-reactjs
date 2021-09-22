import firebase from 'firebase/app';
import 'firebase/messaging';

var firebaseConfig = {
  apiKey: "AIzaSyBBflSGcxwNym7qLgRRLEF8Q-dXzbjvO3M",
  authDomain: "appmessege-d498e.firebaseapp.com",
  databaseURL: "https://appmessege-d498e.firebaseio.com",
  projectId: "appmessege-d498e",
  storageBucket: "appmessege-d498e.appspot.com",
  messagingSenderId: "1031050581459",
  appId: "1:1031050581459:web:ab1ebc430eeaf5a45a0b26",
  measurementId: "G-MZ4Z1EZ3SQ"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

export const getToken = (setTokenFound) => {
  return messaging.getToken({vapidKey: 'BJJSZe5ZGOqxYdr83ZcwP_nKanzcD-r5y3mnk6GG_U5H82M-OKVQC4gcqeCrjnlv1IRzeGd8GzizRdhtT7Zg120'}).then((currentToken) => {
    if (currentToken) {
      console.log('current token for client: ', currentToken);
      setTokenFound(true);
      // Track the token -> client mapping, by sending to backend server
      // show on the UI that permission is secured
    } else {
      console.log('No registration token available. Request permission to generate one.');
      setTokenFound(false);
      // shows on the UI that permission is required 
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // catch error while creating client token
  });
}

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
});