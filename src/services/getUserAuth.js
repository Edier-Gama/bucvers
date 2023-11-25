import { types } from './types'

async function getUsersAuth (id) {
  const res = await fetch('http://localhost:3000/api/users/' + id, {
    method: 'GET'
  })
  const data = await res.json()
  return data
}
function checkUserCredential (setUser) {
  setUser(types.LOADING)
  const data = window.localStorage.getItem('userCredential')
  const parsedData = JSON.parse(data)
  if (parsedData) {
    getUsersAuth(parsedData._id)
      .then((data) => {
        if (data._id === parsedData._id) {
          setUser(types.LOGGEDIN)
        }
      })
  } else {
    setUser(types.LOGGEDOUT)
  }
}

export { getUsersAuth, checkUserCredential }
