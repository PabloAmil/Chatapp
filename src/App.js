import React from "react";
import Navbar from "./components/Navbar";

import { auth } from './firebase' // [Autenticacion 3] se importa esa variable que utiliza la referencia de configuracion
import { useAuthState } from 'react-firebase-hooks/auth' // [Autenticacion 4] se importa el hook que utiliza el estado de autenticacion 
import Chat from "./components/Chat";

const style = {
  appContainer: `max-w-[728px] mx-auto text-center`,
  sectionContainer: `flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative`
}


function App() {

  const [user] = useAuthState(auth) // [Autenticacion 5] se establece una variable user y se le asigna el valor del hook del paso anterior que recibe la autenticacion. siguente paso en Navbar
 // console.log(user)

  return (
    <div className={style.appContainer} basename='/Chatapp-reactjs/'>
      <section className={style.sectionContainer}>
        <Navbar />
        {user ? <Chat/> : null } {/*si el usuario esta logueado muestra el chat, sino no */}
      </section>
    </div>
  );
}

export default App;


// falta: agregar funciones de enviar fotos 
// falta: opcion de borrar chat >> fijarse si se puede crear un snapshot del chat y que sea eso lo que se borra, esto a lo ultimo

