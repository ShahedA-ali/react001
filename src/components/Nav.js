import React from 'react'
import { FaSignOutAlt } from 'react-icons/fa'
import Accordion from './Accordion'
import roles from '../utils/Roles'

function Nav({ user, logout }) {
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
                            <a href="#" className='text-[#fffd] text-sm p-4 relative block a-transition'><span>Profile</span></a>
                        </li>
                        {user && <Accordion data={roles(user.roles)} />}
                    </ul>
                </nav>
            </aside>
        </section>
    )
}

export default Nav