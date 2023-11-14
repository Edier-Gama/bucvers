async function getUsersAuth (id) {
  const res = await fetch('http://localhost:3000/api/users/' + id, {
    method: 'GET'
  })
  const data = await res.json()
  return data
}

export { getUsersAuth }
