import Image from 'next/image'
import React from 'react'

const MediumCard = ({ image, title }: any) => {
    console.log(image);

    return (
        <div className="cursor-pointer hover:scale-105 transition transform duration-300 ease-out">

            <div className='relative h-80 w-80'>


                <Image src={image} layout='fill' className=" rounded-xl" />
            </div>
            <h1 className='text-2xl mt-3'>
                {title}
            </h1>
        </div>
    )
}

export default MediumCard