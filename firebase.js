import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDiXvbzkFRMtmzKo6YSK_9ogQl8GeHAZhI",
    authDomain: "rnquizapp-3dac6.firebaseapp.com",
    databaseURL: "https://rnquizapp-3dac6.firebaseio.com",
    projectId: "rnquizapp-3dac6",
    storageBucket: "rnquizapp-3dac6.appspot.com",
    messagingSenderId: "133113252991",
    appId: "1:133113252991:web:7402858d7551cb0cf8834a",
    measurementId: "G-GL72D2E3MV"
};

firebase.initializeApp(config);

export default firebase;
