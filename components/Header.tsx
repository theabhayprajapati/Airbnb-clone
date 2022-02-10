import Image from 'next/image'
import React from 'react'
import { GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon, UsersIcon } from '@heroicons/react/solid';
const Header = () => {
    return (
        <div>
            <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>

                {/* div for left section */}
                <div className='relative flex items-center h-10 cursor-pointer my-auto'>
                    <Image src={'https://links.papareact.com/qd3'} layout='fill' objectFit='contain' objectPosition={'left'} />
                </div>
                {/* div for middele _ search */}
                <div className='flex items-center md:border-2 rounded-full py-2 px-2 justify-between md:shadow-lg'>
                    <input type="search" className="text-gray-400 placeholder-gray-400 bg-transparent pl-5 outline-none flex-grow" placeholder="Start your search" />
                    <SearchIcon className=' hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2' />
                </div>
                {/* dir for right section */}
                <div className='flex space-x-4 items-center  justify-end text-gray-500'>
                    <p className='hidden md:inline'>
                        Become  a host
                    </p>
                    <GlobeAltIcon className='h-6 hidden md:inline bg-transparent  rounded-full cursor-pointer' />
                    <div className='flex items-center space-x-2 border-2 rounded-full p-2'>
                        <MenuIcon className='h-6' />
                        <UserCircleIcon className='h-6' />
                    </div>

                </div>
            </header>
        </div>
    )
}

export default Header