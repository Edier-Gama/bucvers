const validateForm = (event, firstName, lastName, username, email, password, setDataStatus) => {
  event.preventDefault()

  if (username && email && password && firstName && lastName) {
    setDataStatus(true)
  }
}

export { validateForm }
