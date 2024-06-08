// import React from 'react'

import { ReactTyped } from "react-typed";

export const Hero = () => {
  return (
    <div className=' text-white'>
        <div className='max-w-[800px] mx-auto h-screen mt-[-96px] text-center flex flex-col w-full justify-center'>
            <p className="text-[#00df9a] p-2 font-bold">tuandike nini sijui apa ila twende mbele</p>
            <h1 className='text-4xl sm:text-6xl md:text-7xl font-bold md:py-6'>Grow stronger</h1>
            <div className="flex justify-center py-3">
                <p className="text-xl sm:text-4xl md:5xl font-bold">The family </p>
                <ReactTyped className="text-xl sm:text-4xl md:5xl font-bold pl-2 md:pl-4" strings={['Joel','Sophie','Donnie','Katoto','Johannes','Sandra']} typeSpeed={120} backSpeed={140} loop/>
            </div>
            <div className="md:text-2xl text-xl text-gray-500">
                madus maaadusu madu maaaaadus ngoma ioo njee njeeeenjeeeee nje
            </div>
            <button className="bg-[#00df9a] w-[200px] mx-auto font-medium rounded-md py-3 text-black mt-2">Get started</button>
        </div>
    </div>
  )
}

export default Hero;