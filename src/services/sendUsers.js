export async function sendUsers (firstName, lastName, username, email, password) {
  try {
    const res = await fetch('http://localhost:3000/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName,
        lastName,
        username,
        email,
        password
      })
    })
    const data = await res.json()
    return data
  } catch (error) {
    console.error(error)
    return error
  }
}
