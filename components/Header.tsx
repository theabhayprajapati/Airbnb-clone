import Image from 'next/image'
import React, { useState } from 'react' // theme css file
import { GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon, UserIcon, UsersIcon } from '@heroicons/react/solid';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
import { Calendar } from 'react-date-range';
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/router';

const Header = () => {
    const [searchInput, setsearchInput] = useState('')
    const [startDate, setstartDate] = useState(new Date())
    const [endDate, setendDate] = useState(new Date())
    const [numberofguest, setnumberofguest] = useState(1)
    const router = useRouter()
    const selectionrange = {
        startDate: startDate,
        endDate: endDate,
        Key: 'selection'
    }
    const handleSelections = (ranges: any) => {
        console.log(ranges.range1.startDate)
        console.log(ranges.range1.endDate);
        setstartDate(ranges.range1.startDate)
        setendDate(ranges.range1.endDate)
    }

    const resetInput = () => {
        setsearchInput('')
    }


    return (
        <div>
            <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>

                {/* div for left section */}
                <div className='relative flex items-center h-10 cursor-pointer my-auto'>
                    <Image onClick={() => router.push('/')} src={'https://links.papareact.com/qd3'} layout='fill' objectFit='contain' objectPosition={'left'} />
                </div>
                {/* div for middele _ search */}
                <div className='flex items-center md:border-2 rounded-full py-2 px-2 justify-between md:shadow-lg'>
                    <input value={searchInput} onChange={(event: any) => setsearchInput(event.target.value)} type="search" className="text-gray-400 placeholder-gray-400 bg-transparent pl-5 outline-none flex-grow" placeholder="Start your search" />
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

                {
                    searchInput && (
                        <div className='flex flex-col col-span-3  mx-auto '>
                            <DateRangePicker ranges={[selectionrange]} minDate={new Date()} rangeColors={['#FD5B61']} onChange={handleSelections} />
                            <div className='flex  items-center border-b mb-4'>
                                <h3 className='text-2xl flex-grow font-semibold'>
                                    Number of Guests
                                </h3>
                                <UsersIcon className='h-5' />
                                <input value={numberofguest} onChange={(event: any) => setnumberofguest(event.target.value)} type="number" min="1" className='w-12 pl-2 text-lg outline-none text-red-400' />
                            </div>
                            <div className='flex space-x-1'>
                                <button onClick={resetInput} className='flex-grow text-100'>Cancel</button>
                                <button onClick={() => (router.push('/search'))} className='flex-grow text-red-400'>Search</button>
                            </div>
                        </div>
                    )
                }
            </header>
        </div>
    )
}

export default Header