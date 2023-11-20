import { useEffect, useState } from 'react'
import { sendUsers } from '../services/sendUsers'
import './register.css'
import { getUsersAuth } from '../services/getUserAuth'

function Register () {
  const [error, setError] = useState()
  const [email, setEmail] = useState()
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [firstName, setFirstname] = useState()
  const [lastName, setLastname] = useState()
  const [user, setUser] = useState(undefined)

  useEffect(() => {
    const data = window.localStorage.getItem('userCredential')
    const parsedData = JSON.parse(data)
    if (parsedData) {
      getUsersAuth(parsedData._id)
        .then((data) => {
          if (data._id === parsedData._id) {
            setUser(data)
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }, [])

  const redirectToHome = () => {
    window.location.href = '/home'
  }

  const sendData = (event) => {
    event.preventDefault()
    sendUsers(firstName, lastName, username, email, password)
      .then((data) => {
        if (data.status === 200) {
          window.localStorage.setItem('userCredential', JSON.stringify(data.userData))
          redirectToHome()
        }
        if (data.status === 400) {
          setError(data.message)
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <>
      {user === undefined &&
        <div>
          <section className='formSection'>
            <div>
              <h1>Create your Account</h1>
              <p>Welcome to Bucvers, the information you provide will be used exclusively for identity verification and security purposes</p>
              <form
                method='post'
                action='http://localhost:3000/api/users'
                onSubmit={(event) => sendData(event)}
              >
                <input
                  type='text'
                  onChange={(event) => setFirstname(event.target.value)}
                  placeholder='Firstname'
                  required
                  minLength={5}
                />
                <input
                  type='text'
                  onChange={(event) => setLastname(event.target.value)}
                  placeholder='Lastname'
                  required
                  minLength={5}
                />
                <input
                  type='text'
                  onChange={(event) => setUsername(event.target.value)}
                  placeholder='Username'
                  required
                  minLength={5}
                />
                <input
                  type='email'
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder='Email'
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
                <p>¿ Already have an account ? <a href='/home'>Sign In</a></p>
                <br />
              </form>
            </div>
            <aside />
          </section>
        </div>}
      {user && redirectToHome()}
    </>
  )
}

export { Register }
