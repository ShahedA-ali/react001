import React from 'react'
import Button from './Button'
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa'

const UsersView = ({ data = [], deleteUser, update }) => {
    console.log(data)
    const date = (created_at) => {
        console.log(created_at)
        const newDate = new Date(created_at)
        return newDate.toUTCString().split(' ').splice(0, 5).join(' ')
    }
    return (
        <>
            <thead>

                <tr className='bg-gray-200 rounded-t-lg border font-bold text-2xl shadow-lg'>
                    <td className='p-4 w-48'>Username</td>
                    <td className='px-2 w-48'>Email </td>
                    <td className='px-2 w-60'>Created At</td>
                    <td className='px-2'>Roles </td>
                    <td className='p-4'>Actions</td>
                </tr>
            </thead>
            <tbody>
                {
                    data.users.map((user) => {
                        console.log(user)
                        return (
                            <tr
                                className="bg-gray-100 hover:bg-white hover:cursor-pointer align-top"
                                key={user.id}
                            >
                                    <td className='px-4 py-2'>{user.username}</td>
                                    <td className='p-2'>{user.email}</td>
                                    <td className='p-2'>{date(user.created_at)}</td>
                                    <td className='px-4 py-2'><div className='max-h-36 p-2 border overflow-y-auto min-w-fit'>{user.roles.map(role => (<div className=''>{role}</div>))}</div></td>
                                <td>
                                    <div className='p-2'>
                                    <Button
                                        onClick={() => {
                                            update(user.id);
                                        }}
                                        className="inline-block bg-yellow-600 text-white py-1.5 rounded"
                                        title="Edit"
                                    >
                                        <FaPencilAlt />
                                    </Button>
                                    <Button
                                        onClick={() => {
                                            deleteUser(user);
                                        }}
                                        className="inline-block bg-red-700 text-white  py-1.5 rounded mx-3"
                                        title="Delete"
                                    >
                                        <FaTrashAlt />
                                    </Button>
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
            </tbody>
        </>
    )
}

export default UsersView