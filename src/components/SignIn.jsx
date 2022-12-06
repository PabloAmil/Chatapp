
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth' // [SignIn 1] se importa el GoogleAuthProvider [SignIn 1] signInWithRedirect se agrega
import React from 'react'
import GoogleButton from 'react-google-button' // [SignIn 1] se importa el GoogleButton
import { auth } from '../firebase'
import styles from './styles.css' // [SignIn 1] se importan los estilos que va a utilizar


const googleSignIn = () => { // [SignIn 2] se crea una funcion que guarda lo que devuelve la funcion de GoogleAuthProvider (la provee firebase) en una variable
  const provider = new GoogleAuthProvider()
  signInWithRedirect(auth, provider) // [SignIn 2] se crea la funcion singInWithRedirect (la provee firebase) y utiliza como parametros las variables creadas
}


const SignIn = () => {
  return (
    <div className='wrapper'>
      <GoogleButton onClick={googleSignIn}/>
    </div>
  )
}
// [SignIn 3] al GoogleButton se le agrega el evento onClick que va a llamar a la funcion googleSignIn. Siguente paso en Navbar.jsx


export default SignIn

