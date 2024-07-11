import React, { useState } from 'react'
import style from './login.module.css'
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const login = async (e) => {
        e.preventDefault()
        if (password.trim() === '' || username.trim() === '') {
            alert("Please select a file and provide a description.");
            return;
        }
        console.log(username, password)
        try {
            const res = await fetch("http://localhost:8000/api/auth/login", { method: "POST", headers: {
                "Content-Type": "application/json"
              },
              credentials: "same-origin",
              body: JSON.stringify({username, password}) }).then(res => res.json())
            if (res.success) {
                document.cookie = `token=${res.token}`
                navigate('/')
            } else {
                console.log(res.result)
            }
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className={`grid grid-cols-2 rounded-xl shadow-md bg-gray-50 max-w-fit m-auto mt-48`}>
            <div className='p-5 overflow-hidden'>
                <img className='rounded-lg' src='https://img.heartlight.org/crop.php?w=600&q=95&f=overlazy/backgrounds/27.jpg' />
            </div>
            <form className="px-16 flex flex-col justify-center" onSubmit={login}>
                <h2 className="text-2xl font-bold mb-6 text-gray-800">
                    Login - Asycuda Report 
                </h2>
                <div className="mb-4">
                    <label
                        htmlFor="username"
                        className="block text-gray-700 font-medium mb-2"
                    >
                        Username or Email
                    </label>
                    <Input
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        type="text"
                        id="username"
                        className="w-full px-4 py-2 rounded-md focus:outline-none text-base"
                        placeholder="Enter Username or Email"
                    />
                </div>

                <div className="mb-6">
                    <label
                        htmlFor="password"
                        className="block text-gray-700 font-medium mb-2"
                    >
                        Password
                    </label>
                    <Input
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        type="password"
                        id="password"
                        className="w-full px-4 py-2 rounded-md text-base"
                        placeholder="Enter Password"
                    />
                </div>


                <Button
                    type="submit"
                    className="w-full bg-gray-500 text-white font-bold py-2 px-4 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                    Login
                </Button>
            </form>
        </div>
  )
}

export default Login