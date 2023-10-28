import { sendUsers } from '../../services/sendUsers'

const sendUsersToDataBase = (firstName, lastName, username, email, password) => {
  sendUsers(firstName, lastName, username, email, password)
    .then(() => {
      console.log('User created successfully')
    })
    .catch((error) => {
      console.error('There was an error: ' + error)
    })
}

export { sendUsersToDataBase }
