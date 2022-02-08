import React from "react";
import {signInWithGoogle} from "../../firebase/Firebase";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase/Firebase";
import Button from 'react-bootstrap/Button'


function Ingresar() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div>
      <div className="auth1">
        <h3 className="registro"> Registro de Usuarios Nuevos </h3>
        <input
          placeholder="Email..."
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <input
          placeholder="Password..."
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />
         <Button onClick={register} variant="primary" className="btnUserNew"> Crea tu Usuario </Button>{' '}
      </div>

      <div className="auth2">
        <h3 className="ingresoClientes"> Ingreso Clientes </h3>
        <input
          placeholder="Email..."
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        <input
          placeholder="Password..."
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />
        <Button onClick={login} variant="primary" className="btnUserNew"> Entrar al Sistema</Button>{' '}
        
      </div>
<div className="auth3"> <button onClick = {signInWithGoogle} type="button" class="login-with-google-btn" >
  Sign in with Google
</button></div>
      <h4 className="userLogeed"> Usuario Logueado en el Sistema: </h4>
      <div className="userLogeed2">
        {user?.email}
        {user && true?<img src={user?.photoURL} alt="user" className="userLoggedPic"/>:<p>No hay usuario logueado</p>}

      </div>
      
    <div className="auth4">
    <Button onClick={logout} variant="danger" className="btnUserNew"> Salir del Sistema</Button>{' '}
    </div>
      
    </div>
  );
}

export default Ingresar;




