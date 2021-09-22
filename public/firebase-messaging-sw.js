// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
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

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});
