 import { initializeApp, } from "firebase/app";
 import { getStorage } from "firebase/storage";
 const firebaseConfig = {
  //  apiKey: "AIzaSyBQysagE3aGiM39xem9iU-59w3lIuQ8sfs",
  //  authDomain: "dream-craft-events-da8fb.firebaseapp.com",
  //  projectId: "dream-craft-events-da8fb",
  //  storageBucket: "dream-craft-events-da8fb.appspot.com",
  //  messagingSenderId: "923847074423",
  //  appId: "1:923847074423:web:6cc8329fa7464c9a751c72"


  apiKey: "AIzaSyCcrBI_Rwb4SurTcqL9MtlmPuVaLjPPY7g",
   authDomain: "dream-craft-425608.firebaseapp.com",
   projectId: "dream-craft-425608",
   storageBucket: "dream-craft-425608.appspot.com",
   messagingSenderId: "493435263435",
   appId: "1:493435263435:web:863878ca9fad1393d2fe4e",
   measurementId: "G-FW56E9XRME"
 };

 export const app = initializeApp(firebaseConfig);
 export const storage = getStorage(app);

  export default app
