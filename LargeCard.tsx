import Image from 'next/image'
import React from 'react'
import Footer from './components/Footer'

const LargeCard = ({ image, title, description, buttontext }: any) => {

    return (
        <section className='relative py-16 cursor-pointer '>


            <div className="h-96  min-w-[300px] rounded-2xl relative border-2" style={{}}>
                <img src='https://a0.muscache.com/im/pictures/2da67c1c-0c61-4629-8798-1d4de1ac9291.jpg?im_w=1440' alt="not fond" className='rounded-lg absolute border-2 border-red-500' />
                <div className='absolute top-32 left-12' style={{ top: '8rem', left: '3rem ' }}>
                    <h3 className="text-4xl  mb-3 w-64">
                        {title}
                    </h3>
                    <p>{description}</p>
                    <button style={{ backgroundColor: '#1a202c', paddingLeft: '1rem', paddingRight: '1rem', marginTop: '1rem' }} className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5">{buttontext}</button>
                </div>
            </div>
            <Footer  />




        </section>
    )
}

export default LargeCard