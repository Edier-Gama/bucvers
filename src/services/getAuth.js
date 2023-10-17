async function getUsersEmail (name) {
  const res = await fetch('http://localhost:3000/users')
  const data = await res.json()
  const usermail = []
  data.map((user) => {
    return usermail.push(user.email)
  })
  return usermail
}

export { getUsersEmail }
