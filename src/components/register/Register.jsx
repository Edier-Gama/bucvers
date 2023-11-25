import { useEffect, useState } from 'react'
import { sendUsers } from '../../services/sendUsers'
import './register.css'
import { checkUserCredential } from '../../services/getUserAuth'
import { sendData, redirectToHome } from '../../services/sendData'
import { Loading } from './Loading'
import { types } from '../../services/types'

function Register () {
  const [error, setError] = useState()
  const [email, setEmail] = useState()
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [firstName, setFirstname] = useState()
  const [lastName, setLastname] = useState()
  const [user, setUser] = useState(undefined)

  useEffect(() => {
    checkUserCredential(setUser)
  }, [])

  return (
    <>
      {user === types.LOGGEDOUT &&
        <div>
          <section className='formSection'>
            <div>
              <h1>Create your Account</h1>
              <p>Welcome to Bucvers, the information you provide will be used exclusively for identity verification and security purposes</p>
              <form
                method='post'
                action='http://localhost:3000/api/users'
                onSubmit={(event) => sendData(event, sendUsers, setError, firstName, lastName, username, email, password)}
              >
                <input
                  onChange={(event) => setFirstname(event.target.value)}
                  placeholder='Firstname'
                  spellcheck='false'
                  minLength={5}
                  type='text'
                  required
                />
                <input
                  onChange={(event) => setLastname(event.target.value)}
                  placeholder='Lastname'
                  spellcheck='false'
                  minLength={5}
                  type='text'
                  required
                />
                <input
                  type='text'
                  onChange={(event) => setUsername(event.target.value)}
                  placeholder='Username'
                  spellcheck='false'
                  minLength={5}
                  required
                />
                <input
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder='Email'
                  spellcheck='false'
                  type='email'
                />
                {error &&
                  <div className='errorMessage'>
                    <p>{error}</p>
                  </div>}
                <input
                  type='password'
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder='Password'
                />

                <br />
                <button type='submit'>Sign Up</button>
                <br />
                <p>¿ Already have an account ? <a href='/login'>Sign In</a></p>
                <br />
              </form>
            </div>
            <aside />
          </section>
        </div>}
      {user === types.LOGGEDIN && redirectToHome()}
      {user === types.LOADING && <Loading />}
    </>
  )
}

export { Register }
