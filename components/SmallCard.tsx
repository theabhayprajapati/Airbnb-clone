import Image from 'next/image'
import React from 'react'

const SmallCard = ({ img, location, distance }: any) => {
    return (
        <div className='flex items-center mt-2 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition duration-200 transform  ease-out'>
            <div className='relative h-16 w-16'>
                {/* * left */}
                <Image src={img} layout="fill" className="rounded-lg" />
            </div>

            <div className=''>

                <h1>{location}</h1>
                <h1 className="text-gray-500">{distance}</h1>

            </div>
        </div>
    )
}

export default SmallCard