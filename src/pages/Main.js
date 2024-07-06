import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import {redirect} from 'react-router-dom'

function Main(props) {

  const logout = () => {
    console.log(document.cookie)
    document.cookie = ''
    console.log(document.cookie)
    return redirect('/login')
  }
  
  return (
    <>
    <Nav user={props.user} logout={logout} />
    <main className='ml-72 text-9xl'>
    </main>
    </>
  )
}

export default Main