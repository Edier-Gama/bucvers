const redirectToHome = () => {
  window.location.href = '/home'
}

const sendData = (event, sendUsers, setError, firstName, lastName, username, email, password) => {
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

export { sendData, redirectToHome }
