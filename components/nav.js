import React from 'react'
import Link from 'next/link'

const Nav = () => (
  <nav className='mb-6 flex items-center justify-between flex-wrap bg-green-700 p-6 '>
    <Link href='/home'>
    <a >
      <div className='flex items-center flex-shrink-0 text-white'>
        <span className='font-semibold text-xl tracking-tight'>Job Feed</span>
      </div>
    </a>
    </Link>

    <div className='flex justify-end'>
      <div className='text-sm lg:flex-grow'>
        {/* <Link href='/posts'> */}
        <a
          href='/posts'
          className='block mt-4 lg:inline-block lg:mt-0  hover:text-white font-weight-800 text-lg mr-4 text-gray-400 cursor-pointer'
        >
          Recent Posts
        </a>
        {/* </Link> */}
        {/* <Link href='/orgs'> */}
        <a
          href='/orgs'
          className='block mt-4 lg:inline-block lg:mt-0  hover:text-white font-weight-800 text-lg mr-4 text-gray-400 cursor-pointer'
        >
          Organizations
        </a>
        {/* </Link> */}
      </div>
    </div>
  </nav>
)

export default Nav
