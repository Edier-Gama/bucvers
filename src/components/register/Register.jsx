import { useState } from 'react'
import { sendUsers } from '../../services/sendUsers'
import { Profile } from '../profile/Profile'
import './register.css'

function Register () {
  const [email, setEmail] = useState()
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [firstname, setFirstname] = useState()
  const [lastname, setLastname] = useState()
  const [formStatus, setFormStatus] = useState()

  const userStatus = username ? 'fm-fl-green' : 'fm-fl-onhold'
  const emailStatus = email ? 'fm-fl-green' : 'fm-fl-onhold'
  const pswStatus = password ? 'fm-fl-green' : 'fm-fl-onhold'

  const sendUsersData = () => {
    sendUsers(firstname, lastname, username, email, password)
      .then((data) => {
        console.log(data)
        setFormStatus(data.message)
      })
      .catch((error) => {
        console.log(error)
        setFormStatus(error.message)
      })
  }

  return (
    <>
      <section className='formSection'>
        <div>
          <h1>Welcome to Bucvers</h1>
          <form
            method='post'
            action='http://localhost:3000/api/users'
            onSubmit={() => sendUsersData()}
          >
            <p>First Name</p>
            <input
              type='text'
              onChange={(event) => setFirstname(event.target.value)}
              className={userStatus}
            /><p>Last Name</p>
            <input
              type='text'
              onChange={(event) => setLastname(event.target.value)}
              className={userStatus}
            />
            <p>User Name</p>
            <input
              type='text'
              onChange={(event) => setUsername(event.target.value)}
              className={userStatus}
            />
            <p>Email</p>
            <input
              type='email'
              onChange={(event) => setEmail(event.target.value)}
              className={emailStatus}
            />
            <p>Password</p>
            <input
              type='password'
              onChange={(event) => setPassword(event.target.value)}
              className={pswStatus}
            />

            <br />
            <button type='submit'>Sign Up</button>
          </form>
          <p>{formStatus}</p>

        </div>
        <aside />
      </section>
    </>
  )
}

export { Register }
