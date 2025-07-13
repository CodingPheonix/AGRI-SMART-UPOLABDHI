import React from 'react'
import Navbar from '../Components/Navbar'

const Get_your_map = () => {
    return (
        <div>
            <Navbar />
            <img
                src="/clear.jpg"
                alt="background_img"
                className="absolute w-full h-full object-cover -z-50"
            />

            <div className='pt-30 px-10'>
                hello, you are in get map
            </div>
        </div>
    )
}

export default Get_your_map
