import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import { useNavigate } from 'react-router-dom';

function Main(props) {
  const navigate = useNavigate();
  const logout = () => {
    console.log(document.cookie)
    document.cookie = `token=`;
    console.log(document.cookie)
    navigate('/login')
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