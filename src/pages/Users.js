import React, { useEffect, useState } from 'react'
import Fetch from '../utils/Fetch'
import UsersView from '../components/UsersView'
import { Link, useAsyncError } from 'react-router-dom'
import Button from '../components/Button'
import Update from '../components/Update'

function Users({ }) {
    const [users, setUsers] = useState('')
    const [value, setValue] = useState('')

    useEffect(() => {
        (fetchUsers)();
    }, [])

    const fetchUsers = () => {
        Fetch('http://localhost:8000/api/users/', 'GET').then(res => res.json()).then(res => setUsers(res))
    }


    const [user, setUser] = useState('')
    const [visibleDel, setVisibleDel] = useState(false);
    const deleteUser = (userId) => {
        console.log(userId)
        Fetch(
            `http://localhost:8000/api/users/${userId}`,
            'DELETE'
        ).then(res => { setVisibleDel(false); fetchUsers() });
    };

    const [updateModal, setUpdateModal] = useState(false)


    return (
        <div className="main">
            <header className="flex bg-gray-600 py-3 pl-10 pr-32 text-white justify-between">
                <p className="text-3xl font-bold">Users</p>
                <input
                    type="search"
                    placeholder="Search"
                    className="w-1/3 text-gray-600 rounded px-3"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                // onKeyUp={() => search()}
                />
            </header>
            <div className="text-right px-10 pt-5">
                <Link
                    to="/USER_CREATE"
                    className="bg-blue-600 px-6 py-1.5 font-semibold text-white rounded"
                // onClick={() => show()}
                >
                    Add User
                </Link>
            </div>
            <table className="overflow-hidden rounded-lg m-5 box-border">
                {users &&

                    <UsersView
                        data={users.data}
                        deleteUser={(user) => { setVisibleDel(true); setUser(user) }}
                        update={(user) => {setUpdateModal(true); setUser(user)}}
                    />
                }
            </table>
            {/* {dataLengthDetails && (
            <Paginator
                details={dataLengthDetails}
                requestOtherPages={(page_num) =>
                    allDataRequestFromPaginator(page_num, value)
                }
            />
        )} */}
            <div className="border-t m-5 p-5 text-gray-500">
                Created-by : Shahed Ahmad Ahadi
            </div>

            {users.length < 1 && (
                <div className="text-purple-200 font-bold text-4xl mt-36 h-96 text-center">
                    No Result
                </div>
            )}
            {updateModal && (
                <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center" onClick={() => setUpdateModal(false)}>
                    {updateModal && (
                        <Update
                            visible={() => setUpdateModal()}
                            user={user}
                        />
                    )}
                </div>
            )}
            {visibleDel && (
                <div
                    onClick={() => setVisibleDel(false)}
                    className="fixed flex inset-0 bg-black bg-opacity-30 items-center justify-center"
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="bg-gray-50 p-8 rounded text-center"
                    >
                        <p className="mb-7">
                            Are you sure you want to delete this record?
                            <div className='font-bold'>
                                <div>ID: {user.id}</div>
                                <div>Username: {user.username}</div>
                                <div>Email: {user.email}</div>

                            </div>
                        </p>
                        <div className="flex justify-around">
                            <Button
                                href="#"
                                className="bg-yellow-600 px-6 py-1.5 rounded text-white font-semibold"
                                onClick={() => deleteUser(user.id)}
                            >
                                Delete
                            </Button>
                            <Button
                                href="#"
                                className="bg-red-700 px-6 py-1.5 rounded text-white font-semibold"
                                onClick={() => setVisibleDel(false)}
                            >
                                Back
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Users