import { useState } from 'react'
import { NavLink } from 'react-router';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className="relative w-full h-screen overflow-hidden">
        {/* Background Image */}
        <img
          src="/clear.jpg"
          alt="background_img"
          className="absolute w-full h-full object-cover -z-50"
        />

        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-opacity-50 -z-40" />

        {/* Hero Content */}
        <section className="flex flex-col h-full w-full justify-center items-center text-white px-4 text-center gap-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold drop-shadow-md">
            Smart Farming Assistant
          </h1>
          <p className="text-lg md:text-2xl lg:text-3xl max-w-3xl">
            Empower your farming with data-driven insights and AI Recommendations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <NavLink to={'/home'} className="py-3 px-6 bg-green-600 hover:bg-green-700 transition rounded-2xl text-white text-lg shadow">
              Get Started with Smart Farming
            </NavLink>
            <NavLink to={'/login'} className="py-3 px-6 bg-white hover:bg-gray-100 transition text-slate-700 rounded-2xl text-lg shadow">
              Login to your Dashboard
            </NavLink>
          </div>
        </section>
      </main>
    </>
  );

}

export default App
