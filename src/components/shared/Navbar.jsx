import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="w-full p-2 flex justify-center bg-zinc-100">
      <div className="size-full xl:max-w-6xl">
        <Link to="/">
          <img src="/img/logo.png" className="h-12 md:h-16" />
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
