import React, { useState } from 'react'
import style from './login.module.css'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const login = async (e) => {
        e.preventDefault()
        if (password.trim() === '' || username.trim() === '') {
            alert("Please select a file and provide a description.");
            return;
        }
        console.log(username, password)
        try {
            const res = await fetch("http://localhost:8000/api/users/login", { method: "POST", headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({username, password}) }).then(res => res.json())
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className={`grid grid-cols-2 rounded-lg shadow-md bg-gray-50 w-1/2 m-auto mt-40`}>
            <div className='p-5 overflow-hidden'>
                <img className='rounded-lg shadow-inner border border-gray-500' src='https://img.heartlight.org/crop.php?w=600&q=95&f=overlazy/backgrounds/27.jpg' />
            </div>
            <form className="p-10" onSubmit={login}>
                <h2 className="text-2xl font-bold mb-6 text-gray-800">
                    Login
                </h2>
                <div className="mb-4">
                    <label
                        htmlFor="username"
                        className="block text-gray-700 font-medium mb-2"
                    >
                        Username or Email
                    </label>
                    <input
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        type="text"
                        id="username"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                        placeholder="Enter Username or Emial"
                    />
                </div>

                <div className="mb-6">
                    <label
                        htmlFor="password"
                        className="block text-gray-700 font-medium mb-2"
                    >
                        password
                    </label>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        type="tel"
                        id="password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                        placeholder="Enter Password"
                    />
                </div>


                <button
                    type="submit"
                    className="w-full bg-gray-500 text-white font-bold py-2 px-4 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                    Login
                </button>
            </form>
        </div>
  )
}

export default Login