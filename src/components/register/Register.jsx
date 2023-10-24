import { useState } from 'react'
import { sendUsersData } from './conroller'
import './register.css'

function Register () {
  const [email, setEmail] = useState()
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [firstName, setFirstname] = useState()
  const [lastName, setLastname] = useState()
  const [dataStatus, setDataStatus] = useState()

  const userStatus = username ? 'fm-fl-green' : 'fm-fl-onhold'
  const emailStatus = email ? 'fm-fl-green' : 'fm-fl-onhold'
  const pswStatus = password ? 'fm-fl-green' : 'fm-fl-onhold'

  return (
    <>
      <section className='formSection'>
        <div>
          <h1>Welcome to Bucvers</h1>
          <form
            action=''
            onSubmit={(event) => sendUsersData(event, firstName, lastName, username, email, password, setDataStatus)}
          >
            <p>First Name</p>
            <input
              type='text'
              onChange={(event) => setFirstname(event.target.value)}
              className={userStatus}
              minLength='4'
              required
            /><p>Last Name</p>
            <input
              type='text'
              onChange={(event) => setLastname(event.target.value)}
              className={userStatus}
              minLength='4'
              required
            />
            <p>User Name</p>
            <input
              type='text'
              onChange={(event) => setUsername(event.target.value)}
              className={userStatus}
              minLength='4'
              required
            />
            <p>Email</p>
            <input
              type='email'
              onChange={(event) => setEmail(event.target.value)}
              className={emailStatus}
              required
            />
            <p>Password</p>
            <input
              type='password'
              onChange={(event) => setPassword(event.target.value)}
              className={pswStatus}
              minLength='10'
              min='10'
              required
            />

            <br />
            <button
              className='float'
              type='submit'
            >register
            </button>
            {dataStatus && <p>Se está iniciando su sesión...</p>}
          </form>
        </div>
        <aside />
      </section>
    </>
  )
}

export { Register }
