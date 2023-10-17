import { useState } from 'react'
import { sendUsersData } from './conroller'
import welcomePhoto from '../../public/assets/welcome.svg'
import './register.css'

function Register () {
  const [user, setUser] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [dataStatus, setDataStatus] = useState()

  const userStatus = user ? 'fm-fl-green' : 'fm-fl-onhold'
  const emailStatus = email ? 'fm-fl-green' : 'fm-fl-onhold'
  const pswdStatus = password ? 'fm-fl-green' : 'fm-fl-onhold'

  return (
    <>
      <section className='formSection'>
        <div>
          <h1>Welcome to Bucvers</h1>
          <form action='' />
          <p>username</p>
          <input
            type='text'
            onChange={(event) => setUser(event.target.value)}
            className={userStatus}
            required
          />
          <p>email</p>
          <input
            type='email'
            onChange={(event) => setEmail(event.target.value)}
            className={emailStatus}
            required
          />
          <p>password</p>
          <input
            type='password'
            onChange={(event) => setPassword(event.target.value)}
            className={pswdStatus}
            required
          />

          <br />
          <button
            onClick={() => sendUsersData(user, email, password, setDataStatus)}
            className='float'
          >register
          </button>
          {dataStatus === false &&
            <div className='error-popup'>
              <p>
                <b>Your password must have 8 character</b>
                <br />
                <b>You must be have a valid email</b>
              </p>
            </div>}
        </div>
        <aside>
          <img src={welcomePhoto.src} alt='welcome_image' className='welcome_image' />
        </aside>
      </section>
    </>
  )
}

export { Register }
