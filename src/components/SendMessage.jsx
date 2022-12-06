import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import React, { useState } from 'react'
import {auth, db} from '../firebase' // [Enviar mensajes a la base de datos 4] Se importan auth y db de firebase

const SendMessage = ({scroll}) => {

  const [input, setInput] = useState('') // [Enviar mensajes a la base de datos] Se crea un valor de state para el input donde se escribe el mensaje

  const sendMessage = async (e) => { // cada vez que se hace una llamada API tiene que ser un funcion asincrona
    e.preventDefault(); // [Enviar mensajes a la base de datos 3] se prevee que se recarge toda la pagina al mandar
    if (input === '') {
      alert ('please, send a valid massage')
      return
    }
    const {uid, displayName} = auth.currentUser // uid y displayName estan guardadas en el objeto auth de firebase
    //[Enviar mensajes a la base de datos 4] una vez obtenidos esos datos
    await addDoc(collection(db, 'messages'), { // [Enviar mensajes a la base de datos 4] addDoc es un metodo para agregar datos a la base de datos. utiliza como parametro la funcion collection de firebase que toma la referencia a la base de datos y dentro de esta a cual coleccion apuntar
      text: input, // este objeto que es el segundo parametro de collection son los datos que va a aparecer para cada entrada de messages
      name: displayName,
      uid,
      timestamp: serverTimestamp()
    })
    setInput('') // al mandarse el mensaje el input vuelve a setearse en 0
    scroll.current.scrollIntoView({behaviour: 'smooth'})
  };

  return (
    <form className='form' onSubmit={sendMessage} > {/*[Enviar mensajes a la base de datos 3] al formulario se le agrega el eventListener on submit para que cuando se mande todo se llame a la funcion sendMessage */}
      <input className='input' type="text" placeholder='Message' value={input} onChange={(e) => setInput(e.target.value)} /> {/*[Enviar mensajes a la base de datos 1] Para poder recibir ese valor hay que agregarle el atributo value al input y setearlo para que utiliza el estado input antes creado */}
      {/*[Enviar mensajes a la base de datos 2] Tambien se agrega el evento onChange, que toma el evento (el submit del input) y llama a setInput, pasandole como valor el value del elemento que disparo el evento */}
      <button className='sendbutton' type='submit'>Send</button>
    </form>
  )
}

export default SendMessage

