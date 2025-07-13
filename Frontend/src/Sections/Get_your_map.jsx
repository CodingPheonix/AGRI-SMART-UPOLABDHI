import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import { useEffect } from 'react';

const Get_your_map = () => {

    // State List
    const [message, setMessage] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");

    // Get Location
    const getLocation = () => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    console.log("Location is enabled.");
                    setLatitude(position.coords.latitude);
                    setLongitude(position.coords.longitude);
                },
                (error) => {
                    if (error.code === error.PERMISSION_DENIED) {
                        setMessage("Location access denied by the user")
                    } else if (error.code === error.POSITION_UNAVAILABLE) {
                        setMessage("Location information is unavailable.")
                    } else if (error.code === error.TIMEOUT) {
                        setMessage("The request to get user location timed out.");
                    } else {
                        setMessage("An unknown error occurred.");
                    }
                }
            );
        } else {
            setMessage("Geolocation is not supported by this browser.");
        }
    }

    // UseEffects
    useEffect(() => {
        console.log(latitude);
        console.log(longitude);

    }, [latitude, longitude])


    return (
        <div className="relative min-h-screen">
            <Navbar />

            {/* Background Image */}
            <img
                src="/clear.jpg"
                alt="background_img"
                className="absolute w-full h-full object-cover -z-50"
            />

            {/* Main body */}
            <main className="pt-[100px] px-6 min-h-[calc(100vh-100px)] flex items-center">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 w-full">

                    {/* Left Box – Map Info */}
                    <div className="w-full md:w-1/2 min-h-[400px] p-6  bg-white/30 backdrop-blur-lg rounded-2xl border border-white/20 shadow-2xl flex flex-col items-center justify-around gap-6">
                        <div className="flex flex-col justify-around items-center gap-7">
                            <h2 className="text-3xl font-bold text-gray-800">🌍 Get your Map 🌍</h2>
                            <p className="text-base text-gray-700">Know your exact location within 2 minutes.</p>
                        </div>

                        <p className="text-sm italic text-green-700">{message}</p>

                        <div className="">
                            <button onClick={() => { getLocation() }} className="px-6 py-2 bg-green-600 text-white rounded-full shadow-md hover:bg-green-700 transition duration-200">
                                Get Location
                            </button>
                        </div>
                    </div>


                    {/* Right Box – Map Display */}
                    <div className="w-full md:w-1/2 h-72 md:h-[400px] bg-white/30 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl flex items-center justify-center text-gray-700">
                        <span className="text-lg">🗺️ Map will appear here</span>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Get_your_map;
