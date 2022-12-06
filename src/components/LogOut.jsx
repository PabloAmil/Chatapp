import React from 'react'
import styles from './styles.css'
import { auth } from '../firebase' // [LogOut 1] importar auth de firebase



const LogOut = () => {
  
  const signOut = () => { // [LogOut 2] se crea una funcion que desloguea que llama al metodo signOut y que tiene auth como argumento. luego se agrega el evento onClick al boton y este tiene un callback que llama al metodo signOut del objeto auth. Siguente paso en Navbar.jsx 
    signOut(auth)
  };
  
  
  return (
    <button onClick={() => auth.signOut()} className='logOutButton'>LogOut</button>
  )
};

export default LogOut;