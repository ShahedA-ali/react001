import React, { useState } from 'react'
import style from './login.module.css'

function Register() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
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
    <div className={`grid gird-cols-3 ${style.bg_cover} h-[94vh]`}>
            <form className="bg-white p-10 rounded-lg shadow-md w-full h-fit max-w-lg col-start-3 mt-40" onSubmit={login}>
                <h2 className="text-2xl font-bold mb-6 text-gray-800">
                    Register
                </h2>
                <div className="mb-4">
                    <label
                        htmlFor="username"
                        className="block text-gray-700 font-medium mb-2"
                    >
                        Username
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
                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-gray-700 font-medium mb-2"
                    >
                        Email
                    </label>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type="text"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                        placeholder="Enter Email"
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
                        type="password"
                        id="password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                        placeholder="Enter Password"
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="Confirmpassword"
                        className="block text-gray-700 font-medium mb-2"
                    >
                        Confirm Password
                    </label>
                    <input
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        value={confirmPassword}
                        type="password"
                        id="Confirmpassword"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                        placeholder="Confirm Password"
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="role"
                        className="block text-gray-700 font-medium mb-2"
                    >
                        Select A Role
                    </label>
                    <select name="selectedFruit" defaultValue="orange">
                        <option value="apple">Apple</option>
                        <option value="banana">Banana</option>
                        <option value="orange">Orange</option>
                    </select>
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

export default Register