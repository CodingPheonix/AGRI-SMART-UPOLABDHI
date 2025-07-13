import React from 'react'
import Navbar from '../Components/Navbar'

const Home = () => {
    return (
        <div>
            <Navbar />
            <img
                src="/clear.jpg"
                alt="background_img"
                className="absolute w-full h-full object-cover -z-50"
            />

            hello, you are in home
        </div>
    )
}

export default Home
