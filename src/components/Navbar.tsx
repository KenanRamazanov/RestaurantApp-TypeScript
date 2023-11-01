
import React from 'react'
import Menu from './Menu'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='h-12 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase'>
        <div className='hidden md:flex gap-4'>
          <Link href='/'>Homepage</Link>
          <Link href='/'>Menu</Link>
          <Link href='/'>Contact</Link>

        </div>
        {/*Logo */}
        <div className='text-xl'>
            <Link href="/">
            Massimo
            </Link>
        </div>
        {/*MobileMenu */}
       <div>
        <Menu/>
       </div>
    </div>
  )
}

export default Navbar