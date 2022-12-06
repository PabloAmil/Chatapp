import { collection, onSnapshot, orderBy, QuerySnapshot } from 'firebase/firestore';
import React, {useState, useEffect, useRef} from 'react';
import Message from './Message'; // [Message 1] una vez creado el componente importarlo y ubicarlo en main. siguente paso en Message.jsx
import { query  } from 'firebase/firestore' // [Base de datos 6] importar todas las herramientas traidas de firestore (db, query, collection, orderBy, onSnapshot, querySnapshot)
import { db } from '../firebase'
import SendMessage from './SendMessage';



const Chat = () => {

  const [messages, setMessages] = useState([]) 
  const scroll = useRef() // [Chat 2] se crea la variable scroll (que luego se va a usar) y se le asigna el valor que determine el hook de react useRef(). Siguiente paso [Message], crear el componente Message.jsx

  useEffect(()=> {  // [Base de datos 1] se va a utilizar un useEffect para ver si hay cambios y cada vez que haya un cambio en la base de datos se va a actualizar el componente 
    const q = query(collection(db, 'messages'), orderBy('timestamp')) // [Base de datos 2] el metodo query toma como parametros la base de datos y la coleccion, y despues con el metodo orderBy elige la timestamp para ordenar los datos
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => { // [Base de datos 3] onSnapshot() es un metodo para escuchar el documento constantemente y que utiliza un callback con QuerySnapshot como un llamado inicial que crea una "foto" con los contenidos que son en realidad una representacion de los resultados del query 
      let messages = []
      QuerySnapshot.forEach((doc) => { // [Base de datos 4] para cada uno de los elementos que componen el QuerySnapshot se lo recorre con un metodo forEach, por cada uno (doc) al array vacio de messages se le pushea del objeto doc desparramado el metodo data() y se le agrega un id que es la propiedad id del objeto doc
        messages.push({...doc.data(), id: doc.id})
      })
      setMessages(messages) // [Base de datos 5] se llama al metodo setMessages y se actualiza su contenido con la nueva version de messages
    })
    return () => unsubscribe()
  }, [])

  return (
    <>
      <main className='chat-main'>

        {/* [Base de datos 7] si los mensajes existen va a recorrer el array con map y lo va a renderizar. como es react el componente message que se renderiza tiene que tener una key unica, pero ademas como atributo se pasa el mismo contenido del mensaje.  */}
        {messages && messages.map((message) => (
          <Message key={message.id} message={message}/> 
          
        ))} {/* [Mensajes] aca el componente Message recibe como atributo el mensaje al mapear messages le va a ir pasando todos los mensajes. sigue en Message.jsx */}
      </main>
      <SendMessage scroll={scroll}/> {/* [Mensajes 2] se crea el componente, se lo ubica e importa. Continua en SendMessage.jsx */}
      <span ref={scroll}></span> {/*para que cuando un mensaje se muestre en el fondo scrollee automaticamente hasta el fondo  */}
    </>
  )
};

export default Chat;

// [Chat 1] Se crea el componente el main contiene el componente de chat, por fuera de el va a estar el componente con el mensaje y luego el span para deslizarse hacia abajo

// corregir el scroll

// 
