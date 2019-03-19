const node = require('node-firestore-import-export');
const firebase = require('firebase-admin');


firebase.initializeApp({
    apiKey: "YOURINFO",
    authDomain: "YOURINFO",
    databaseURL: "YOURINFO",
    projectId: "YOURINFO",
    storageBucket: "YOURINFO",
    messagingSenderId: "YOURINFO"             
});

const collectionRef = firebase.firestore().collection('YOURCOLLECTIONPATH');

node.firestoreExport(collectionRef)
	.then(data=>console.log(data));