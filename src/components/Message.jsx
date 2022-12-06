import React from 'react'
import { auth } from '../firebase'

const Message = ({message}) => { // [Mensajes 1] el componente recibe como parametro los mensajes mapeados 
  
  // [identificar mensajes de usuarios]

  const messageClass = 
  message.uid === auth.currentUser.uid 
  ? 'sent' 
  : 'received';

  return (
    <div>
      <div className={`message ${messageClass}`}>
        <p className='name'>{message.name}</p> 
        <p className='messageText'>{message.text}</p> {/* [Mensajes 1] tiene que ser .text porque sino lo que va a pasar es un objeto y eso va a dar error. continua en Chat.jsx */}
      </div>
    </div>
  )
}

export default Message




