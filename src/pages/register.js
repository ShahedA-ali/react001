import React, { useCallback, useEffect, useState } from 'react'
import style from './login.module.css'
import Fetch from '../utils/Fetch'
import MultiSelect from '../components/MultiSelect'
import Input from '../components/Input'
import { useNavigate } from 'react-router-dom'
import keyGenerator from '../utils/keyGenerator'
import Alert from '../components/Alert'

function Register() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [selectedRoles, setSelectedRoles] = useState([])
    const [roles, setRoles] = useState()

    const [alerts, setAlerts] = useState([]);

    const addAlert = useCallback((message, type) => {
        if (alerts.length < 5) {
            const id = keyGenerator()
            setAlerts([...alerts, { id, message, type }]);
        } else {
            setAlerts(prev => [...prev, prev.shift()])
            const id = keyGenerator()
            setAlerts([...alerts, { id, message, type }]);
        }
    }, [alerts]);

    const removeAlert = useCallback((id) => {
        setAlerts(alerts.filter(alert => alert.id !== id));
    }, [alerts]);

    const navigate = useNavigate()

    useEffect(() => {
        (async function role() {
            Fetch('http://localhost:8000/api/roles/get_all_roles', 'GET').then(res => res.json()).then(res => setRoles(res))
        })();
    }, [])

    console.log(selectedRoles)

    const register = async (e) => {
        e.preventDefault()
        if (password.trim() === '' || username.trim() === '') {
            addAlert("Please fill the whole form", 'info');
            return
        }
        console.log(username, password)
        try {
            const res = await fetch("http://localhost:8000/api/auth/register", {
                method: "POST", headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username, password, email, roles: selectedRoles })
            }).then(res => res.json()).then(res => {
                if (!res.success) {
                    console.log(res)
                    addAlert(res.result, 'error')
                }else {
                    navigate('/USER_VIEW')
                }
            })
            // .then(res => navigate('/USER_VIEW'))
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>

            <div className='absolute z-50 w-96 right-4 top-4'>
                {alerts.map(alert => (
                    <Alert
                        key={alert.id}
                        message={alert.message}
                        type={alert.type}
                        onClose={() => removeAlert(alert.id)}
                    />
                ))}
            </div>
            <div className={`rounded-xl shadow-md bg-gray-50 w-1/3 m-auto`}>
                {/* <div className='p-5 overflow-hidden'>
                    <img className='rounded-lg max-h-full ' src='https://img.heartlight.org/crop.php?w=600&q=95&f=overlazy/backgrounds/27.jpg' />
                </div> */}
                <form className="p-16 flex flex-col" onSubmit={register}>
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
                        <Input
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                            type="text"
                            id="username"
                            className="w-full px-4 py-2 rounded-md focus:outline-none"
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
                        <Input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 rounded-md focus:outline-none"
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
                        <Input
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            type="password"
                            id="password"
                            className="w-full px-4 py-2 rounded-md focus:outline-none"
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
                        <Input
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            value={confirmPassword}
                            type="password"
                            id="Confirmpassword"
                            className="w-full px-4 py-2 rounded-md focus:outline-none"
                            placeholder="Confirm Password"
                        />
                    </div>
                    <div className="mb-8">
                        <label
                            htmlFor="role"
                            className="block text-gray-700 font-medium -mb-2"
                        >
                            Select Role
                        </label>
                        {roles &&
                            <MultiSelect onChange={(e) => setSelectedRoles(e)} textField={'role_name'} placeholder="Select Roles For The User" data={roles.data.data.roles} className={'w-full px-4 py-2 rounded-md focus:outline-none'} />
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
        </>
    )
}

export default Register