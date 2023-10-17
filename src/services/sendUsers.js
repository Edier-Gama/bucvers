export async function sendUsers (username, email, password) {
  try {
    await fetch('http://localhost:3000/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        email,
        password
      })
    })
    console.log('Everything was good')
  } catch (error) {
    console.error('There was an error doing your request:' + error)
  }
}
