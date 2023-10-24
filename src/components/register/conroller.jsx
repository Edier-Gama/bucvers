import { sendUsers } from '../../services/sendUsers'

const sendUsersData = (event, firstName, lastName, username, email, password, setDataStatus) => {
  event.preventDefault()

  if (username && email && password && firstName && lastName) {
    setDataStatus(true)

    sendUsers(firstName, lastName, username, email, password)
      .then(() => {
        console.log('User created successfully')
      })
      .catch((error) => {
        console.error('There was an error: ' + error)
      })
  }
}

export { sendUsersData }
