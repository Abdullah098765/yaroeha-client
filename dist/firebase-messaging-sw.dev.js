"use strict";

// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js'); // Initialize the Firebase app in the service worker by passing the generated config

var firebaseConfig = {
  apiKey: 'AIzaSyCmpqOzl80y01bEgUoJ8P5QNHjfh9-VF2Y',
  authDomain: 'yaromeha-app.firebaseapp.com',
  databaseURL: 'https://yaromeha-app-default-rtdb.firebaseio.com',
  projectId: 'yaromeha-app',
  storageBucket: 'yaromeha-app.appspot.com',
  messagingSenderId: '460269542777',
  appId: '1:460269542777:web:7330087765c296e711a3a8',
  measurementId: 'G-DWT7JHDFQ1'
};
firebase.initializeApp(firebaseConfig); // Retrieve firebase messaging

var messaging = firebase.messaging();
messaging.onBackgroundMessage(function (payload) {
  console.log('Received background message ', payload);
  var notificationTitle = payload.notification.title;
  var notificationOptions = {
    body: payload.notification.body
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});