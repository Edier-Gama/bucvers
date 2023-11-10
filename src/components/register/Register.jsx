import { useEffect, useState } from 'react'
import { sendUsers } from '../../services/sendUsers'
import './register.css'

function Register () {
  const [error, setError] = useState()
  const [email, setEmail] = useState()
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [firstName, setFirstname] = useState()
  const [lastName, setLastname] = useState()
  const [user, setUser] = useState()

  const userStatus = username ? 'fm-fl-green' : 'fm-fl-onhold'
  const emailStatus = email ? 'fm-fl-green' : 'fm-fl-onhold'
  const pswStatus = password ? 'fm-fl-green' : 'fm-fl-onhold'

  useEffect(() => {
    const userData = window.localStorage.getItem('userCredential')
    if (userData) {
      const userInfo = JSON.parse(userData)
      setUser(userInfo)
    }
  }, [])

  const goToPofile = () => {
    window.location.href = '/profile'
  }

  const sendData = (event) => {
    event.preventDefault()
    sendUsers(firstName, lastName, username, email, password)
      .then((data) => {
        if (data.status === 200) {
          window.location.href = '/profile'
          window.localStorage.setItem('userCredential', JSON.stringify(data.userData))
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
              <h1>Welcome to Bucvers</h1>
              <form
                method='post'
                action='http://localhost:3000/api/users'
                onSubmit={(event) => sendData(event)}
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
                <button type='submit'>Send</button>
                {error}
              </form>
            </div>
            <aside />
          </section>
        </div>}
      {user && goToPofile()}
    </>
  )
}

export { Register }
