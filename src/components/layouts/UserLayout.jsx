import React from 'react'
import Navbar from '../shared/Navbar'

const UserLayout = ({ children }) => {
  return (
    <div className="h-screen flex flex-col items-center gap-4 pb-4">
      <Navbar />
      <div className="size-full max-w-6xl px-4 xl:p-0 overflow-auto">
        {children}
      </div>
    </div>
  )
}

export default UserLayout
