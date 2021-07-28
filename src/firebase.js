import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDdYjT_ppu116vkpbG7Q_S5gvAwkHekffE",
    authDomain: "drive-clone-b45b7.firebaseapp.com",
    databaseURL: "https://drive-clone-b45b7-default-rtdb.firebaseio.com",
    projectId: "drive-clone-b45b7",
    storageBucket: "drive-clone-b45b7.appspot.com",
    messagingSenderId: "259196704941",
    appId: "1:259196704941:web:71e5583d033f905f000e24",
    measurementId: "G-VJQV35YKGZ"
  };

  const app = firebase.initializeApp(firebaseConfig)

  export const storage = app.storage();
  export const database = {
      formatDoc : (doc) =>{
          return {id:doc.id , ...doc.data()}
      },
      folders: firebase.collection("folders"),
      files: firebase.collection("files")
  }

  export const getCurrentTimestamp = firebase.firestore.Fieldvalue.serverTimestamp()

  export default app;