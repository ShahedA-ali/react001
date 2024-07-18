import React, { useState } from 'react'
import Input from './Input'

function Update({ user, visible }) {
    const [username, setUsername] = useState(user.username)
    const [email, setEmail] = useState(user.email)
    const [password, setPassword] = useState(user.password)
    const [selectedRoles, setSelectedRoles] = useState([])
    const [roles, setRoles] = useState()


    console.log(user)
    return (
        <div className={`rounded-xl shadow-md bg-gray-50 m-auto w-1/2`} onClick={(e) => e.stopPropagation()}>
            {/* <div className='p-5 overflow-hidden'>
                <img className='rounded-lg max-h-full ' src='https://img.heartlight.org/crop.php?w=600&q=95&f=overlazy/backgrounds/27.jpg' />
            </div> */}
            <form className="p-12 flex flex-col" onSubmit={Update}>
                <h2 className="text-2xl font-bold mb-6 pb-6 text-gray-800 border-b">
                    Update User with ID: {user.id}
                </h2>

                <div className='grid grid-cols-2 gap-10'>

                    <div>
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
                                type="text"
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
                    </div>
                    <div>

                        <div className="mb-8">
                            <label
                                htmlFor="role"
                                className="block text-gray-700 font-medium -mb-2"
                            >
                                Select Roles
                            </label>
                            {/* {roles &&
                        <MultiSelect onChange={(e) => setSelectedRoles(e)} textField={'role_name'} placeholder="Select Roles For The User" data={roles.data.data.roles} className={'w-full px-4 py-2 rounded-md focus:outline-none'} />
                    } */}
                            {/* <select name="selectedFruit" className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500' defaultValue="orange">
                        {roles &&  roles.data.data.roles.map(item => (<option>{item.role_name}</option>))}
                    </select> */}
                        </div>
                    </div>
                </div>



                <button
                    type="submit"
                    className="w-full bg-gray-500 text-white font-bold py-2 px-4 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                    Update
                </button>
            </form>
        </div> 
    )
}

export default Update