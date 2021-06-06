import firebase from 'firebase';

 var firebaseConfig = {
    apiKey: "AIzaSyDv_hwGZ_2y3SCm6KRXrLUoi8wtCwS1mto",
    authDomain: "taskmanager-eb911.firebaseapp.com",
    projectId: "taskmanager-eb911",
    storageBucket: "taskmanager-eb911.appspot.com",
    messagingSenderId: "787366449944",
    appId: "1:787366449944:web:69546834fff86ea08d846d"
  };
 
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;