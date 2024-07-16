import React, { useEffect, useState } from 'react'
import Fetch from '../utils/Fetch'
import UsersView from '../components/UsersView'
import { Link } from 'react-router-dom'

function Users() {
    const [users, setUsers] = useState('')
    const [value, setValue] = useState('')

    useEffect(() => {
        (async function users() {
            Fetch('http://localhost:8000/api/users/', 'GET').then(res => res.json()).then(res => setUsers(res))
        })();
    }, [])
    console.log(users)

    return (
        <div className="main">
        {/* <header className="flex bg-green-600 p-3 text-white justify-between">
            <p className="text-3xl font-bold">Users</p>
            <input
                type="search"
                placeholder="Search"
                className="w-1/3 text-gray-600 rounded px-3"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyUp={() => search()}
            />
        </header> */}
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
            {/* <thead>
                <tr className="bg-green-600 rounded-t-lg text-white font-bold text-2xl shadow-lg">
                    <td className="w-96 px-3 py-5 ">Name</td>
                    <td className="w-96">Details</td>
                    <td className="w-96">Actions</td>
                </tr>
            </thead> */}
            {users && 
            
            <UsersView
                data={users.data}
                // delete={(id) => closeDeleteModal(id)}
                // update={(id) => update(id)}
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
        {/* {visible && (
            <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
                {visible && <AddStudent visible={() => show()} />}
            </div>
        )} */}
        {/* {updateModal && (
            <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
                {updateModal && (
                    <Update
                        visible={() => updateShow()}
                        data={updateData}
                    />
                )}
            </div>
        )} */}
        {/* {visibleDel && (
            <div
                onClick={() => closeDeleteModal()}
                className="fixed flex inset-0 bg-black bg-opacity-30 items-center justify-center"
            >
                <div
                    onClick={(e) => e.stopPropagation()}
                    className="bg-white p-8 rounded text-center"
                >
                    <p className="mb-7">
                        Are you sure you want to delete this record?
                    </p>
                    <div className="flex justify-around">
                        <a
                            href="#"
                            className="bg-yellow-500 px-6 py-1.5 rounded text-white font-semibold"
                            onClick={() => del(delId)}
                        >
                            Delete
                        </a>
                        <a
                            href="#"
                            className="bg-red-600 px-6 py-1.5 rounded text-white font-semibold"
                            onClick={() => closeDeleteModal()}
                        >
                            Back
                        </a>
                    </div>
                </div>
            </div>
        )} */}
    </div>
    )
}

export default Users