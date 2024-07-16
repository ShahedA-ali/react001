import React from 'react'
import Nav from './Nav'

function Layout({user, children}) {
  return (
    <>
        <Nav user={user} />
    <main className='ml-72'>{children}
    </main>
    </>
  )
}

export default Layout