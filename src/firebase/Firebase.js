import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth, GoogleAuthProvider, signInWithPopup,} from "firebase/auth"

;
 

const firebaseConfig = {
    apiKey: "AIzaSyAB_PJC50N_wpwRDnXAV7WSgeCbG8t2Fls",
    authDomain: "zapatillas-mdq.firebaseapp.com",
    projectId: "zapatillas-mdq",
    storageBucket: "zapatillas-mdq.appspot.com",
    messagingSenderId: "104598466819",
    appId: "1:104598466819:web:08fa451ffbaac32c68b936"
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app)
  export const db = getFirestore(app);

const provider = new GoogleAuthProvider();


export const signInWithGoogle = () => {
  
  signInWithPopup(auth, provider)
  .then((resultado) => {
  const name = resultado.user.displayName;
  const email = resultado.user.email;
  const profilePic = resultado.user.photoURL
  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
  localStorage.setItem("profilePic", profilePic);
  console.log(resultado.user);
})
.catch((error) => {
  console.log(error)
})
}

export const signOut = () => {
  auth.signOut()
  .then((resultado) => {
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("profilePic");
  })
  .catch((error) => {
    console.log(error)
  })
}

