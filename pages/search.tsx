import React from 'react'
import Header from '../components/Header'

const Search = () => {
    return (
        <div>
            <Header />
            <main className='flex'>
                <section className='flex-grow  pt-14 px-16'>
                    <p className='text-xs'> 300+ Stays for 5 number of guests</p>
                    <h1 className='text-3xl font-semibold mt-2 mb-6'>
                        Stay's on Mars
                    </h1>
                    <div className='hidden lg:inline-flex md-5  space-x-3 text-gray-800 whitespace-nowrap items-center'>
                        <p className="button">Price</p>
                        <p className="button">Type of place</p>
                        <div className='items-center text-gray-300 '>
                            |
                        </div>
                        <p className="button">Cancelation Flexibility</p>
                        <p className="button">Wifi</p>
                        <p className="button">Air Conditioning</p>
                        <p className="button">Kithen</p>
                        <p className="button">Iron</p>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Search