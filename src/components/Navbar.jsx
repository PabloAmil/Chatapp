import React from 'react'
import styles from './styles.css'
import { auth } from '../firebase' // [Autenticacion 6] se importa auth nuevamente
import { useAuthState } from 'react-firebase-hooks/auth' // [Autenticacion 7] se importa de nuevo el hook. parece que todos los componentes que la vayan a usar tiene que importar lo relacionado con la autenticacion
import SignIn from './SignIn'
import LogOut from './LogOut'

  const Navbar = () => {

    const [user] = useAuthState(auth) // [Autenticacion 8] se crea aca tambien la variable user y se le asignan los datos de auth. se crea un componente SignIn.jsx que va a estar dentro del Navbar y se lo importa. proximo paso en SignIn.jsx
    // nota, al poner user entre corchetes ya se lo esta importando
    console.log(user)

    return (
      <div className='navbar'>
        <h1 className='heading'>ChatApp</h1>
        {user ? <LogOut /> : <SignIn/>}
      </div>
    )
}

export default Navbar

// [LogOut] se crea e importa el componente LogOut. siguente paso en LogOut.jsx
// [LogOut 3] se crea un operador ternario que determina si mostrar el Logout o no
// [Chat] 