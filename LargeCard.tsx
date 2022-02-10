import Image from 'next/image'
import React from 'react'

const LargeCard = ({ img, title, description, button }: any) => {
    return (
        <section>

            <div className='relative h-96 min-w-[300px]'>
                <Image src={img} layout='fill' objectFit='cover' className='rounded-2xl' />
            </div>
        </section>
    )
}

export default LargeCard