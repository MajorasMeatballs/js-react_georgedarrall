import React from 'react'
import {Link, Outlet} from "react-router-dom"

export default function Layout() {
  return (
    <>
    <header className='bg-black text-white p-4 w-full gap-3 flex items-center'>
        <Link to="/">Counter</Link>
        <Link to="/todo-list">ToDoList</Link>
        <Link to="/contact-form">ContactForm</Link>
        <Link to="/github-app">Github App</Link>
    </header>

    <div>
        <Outlet/>
    </div>
    </>
  )
}
