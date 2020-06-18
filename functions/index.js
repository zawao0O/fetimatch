const functions = require('firebase-functions');
const admin = require('firebase-admin');
const { Storage } = require('@google-cloud/storage');

admin.initializeApp(functions.config().firebase);
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

// exports.syncDataBase = functions.storage.object().onFinalize(object => {
//   const bucketName = 'fetimatch.appspot.com'; // cloud storageのproject名
//   const filePath = object.name;
//   const db = admin.firestore();

//   const findIndex = filePath.indexOf("/");

//   // 親doc切り出しのための定数
//   const parentDir = filePath.substring(0, findIndex);

//   const fileName = filePath.replace(`${parentDir}/`, "");
  


//   // getDownLoadURLで書き直し
//   db.collection("users").doc(parentDir).set({
//     filePath,
//     downloadUrl: `https://firebasestorage.googleapis.com/v0/b/${bucketName}/o/${encodeURIComponent(filePath)}?alt=media`
//   }, { merge: true }).then(() => console.log('firestoreに保存できました')).catch(() => console.log("失敗しました"));

  

// });

exports.syncDataBase = functions.storage.object().onFinalize(object => {
  const storage = new Storage({
    projectId: 'fetimatch',
    keyFilename: 'fetimatch-firebase-adminsdk-rqvl1-aa5d15e86b.json'
  });
  const bucket = storage.bucket("fetimatch.appspot.com");
  const db = admin.firestore();

  const filePath = object.name;
  const findIndex = filePath.indexOf("/");
  //親doc切り出しのための定数
  const parentDir = filePath.substring(0, findIndex);

  db.collection("users").doc(parentDir).set({
    profilePicture: filePath
    }, 
    { merge: true })
  .then(() => console.log('firestoreに保存できました'))
  .catch(() => console.log("失敗しました"));

});


