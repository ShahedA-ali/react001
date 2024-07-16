import React, { useEffect, useState } from 'react'
import { FaSignOutAlt } from 'react-icons/fa'
import Accordion from './Accordion'
import roles from '../utils/Roles'
import { Link, useNavigate } from 'react-router-dom';

function Nav({ user }) {
    const navigate = useNavigate();
  const logout = () => {
    console.log(document.cookie)
    document.cookie = `token=`;
    console.log(document.cookie)
    navigate('/login')
  }
    console.log(user)
    return (
        <section className="h-screen fixed">
            <aside className="w-72 h-full top-0 overflow-hidden bg-[#19222a]">
                <header className='bg-[#19fa] w-full block px-3 py-4 font-bold text-2xl'>
                    {user.username.toUpperCase()}
                    <div className='text-sm pl-4'>{user.email}</div>
                </header>
                <nav className='bg-[#19222a] h-full text-xl overflow-hidden pb-24 z-10 relative'>
                    <ul className="list-none w-full p-0 m-0 relative h-full">
                        <li className='pl-0 ml-0 w-full inline-block'>
                            <Link to="#" className='text-[#fffd] text-sm p-4 relative block a-transition'><span>Profile</span></Link>
                        </li>
                        <li className='pl-0 ml-0 w-full inline-block'>
                            <Link to="/" className='text-[#fffd] text-sm p-4 relative block a-transition'><span>Main</span></Link>
                        </li>
                        {user && <Accordion data={roles(user.roles)} />}
                        <li className='pl-0 ml-0 w-full absolute bottom-0'>
                            <a href='/login' onClick={() => logout()} className='cursor-pointer text-[#fffd] text-sm p-4 block a-transition'><i className='text-xl absolute right-0 pr-5 inline align-middle'><FaSignOutAlt /></i> <span>Logout</span></a>
                        </li>
                    </ul>
                </nav>
            </aside>
        </section>
    )
}

export default Nav