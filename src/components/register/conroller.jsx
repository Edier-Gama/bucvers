import { sendUsers } from '../../services/sendUsers'

const sendUsersData = (user, email, password, setDataStatus) => {
  const conditions = {
    validUser: user,
    validEmail: email,
    validPassword: password,
    validLongerPass: password.length > 10
  }
  if (conditions.validUser && conditions.validEmail && conditions.validPassword && conditions.validLongerPass) {
    setDataStatus(true)
    sendUsers(user, email, password)
      .then(() => {
        console.log('User created successfully')
      })
      .catch((error) => {
        console.error('There was an error: ' + error)
      })
  } else {
    setDataStatus(false)
  }
}

export { sendUsersData }
