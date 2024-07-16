import React, { useState } from 'react'
import Nav from './Nav'

function Layout({user, children}) {
    const [nav, setNav] = useState(false)
    console.log(nav)
    const smallNav = () => {
        setNav(prev => !prev)
    }
  return (
    <>
        <Nav user={user} setSmallNav={() => smallNav()} smallNav={nav} />
    <main className={`${nav ? 'nav': 'ml-72 nav'}`}>{children}
    </main>
    </>
  )
}

export default Layout