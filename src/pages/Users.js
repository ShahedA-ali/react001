import React, { useEffect, useState } from 'react'
import Fetch from '../utils/Fetch'

function Users() {
  const [users, setUsers] = useState()

  useEffect(() => {
    (async function users() {
        Fetch('http://localhost:8000/api/users/', 'GET').then(res => res.json()).then(res => setUsers(res))
    })();
}, [])
    console.log(users)
  
  return (
    <div>Users</div>
  )
}

export default Users