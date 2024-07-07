import React, { useEffect, useState } from 'react'
import style from './login.module.css'
import Fetch from '../utils/Fetch'
import MultiSelect from '../components/MultiSelect'

function Register() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [roles, setRoles] = useState()

    useEffect(() => {
        (async function role() {
            Fetch('http://localhost:8000/api/roles/get_all_roles', 'GET').then(res => res.json()).then(res => setRoles(res))
        })();
    }, [])
    


    const register = async (e) => {
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
    <div className={`grid grid-cols-2 rounded-xl shadow-md bg-gray-50 max-w-fit m-auto mt-40`}>
        <div className='p-5 overflow-hidden'>
                <img className='rounded-lg max-h-full ' src='https://img.heartlight.org/crop.php?w=600&q=95&f=overlazy/backgrounds/27.jpg' />
            </div>
            <form className="p-16 flex flex-col justify-center" onSubmit={register}>
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
                        placeholder="Enter Username"
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
                    {roles &&
                    <MultiSelect textField={'role_name'} data={roles.data.data.roles} />
                    }
                    {/* <select name="selectedFruit" className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500' defaultValue="orange">
                        {roles &&  roles.data.data.roles.map(item => (<option>{item.role_name}</option>))}
                    </select> */}
                </div>


                <button
                    type="submit"
                    className="w-full bg-gray-500 text-white font-bold py-2 px-4 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                    Register
                </button>
            </form>
        </div>
  )
}

export default Register