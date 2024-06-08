import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai';
import { useState } from 'react';
export const Navbar = () => {
    const[nav , setNav]= useState(true);
    const handleNav=()=>{
        setNav(!nav);
    }
  return (
    <div className='text-white items-center h-24 max-w-[1240px] mx-auto px-4 flex justify-between'>
        <h1 className="text-[#00df9a] text-3xl font-gold">Joh.React</h1>
        <ul className=" hidden md:flex">
            <li className="p-4">Home</li>
            <li className="p-4">Company</li>
            <li className="p-4">Reasources</li>
            <li className="p-4">About</li>
            <li className="p-4">Contacts</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        </div>
        <div className={!nav ? "fixed top-0 left-0 border-r border-r-gray-900 h-full w-[65%] bg-[#000300] ease-in-out duration-500" : 'fixed left-[-100%]'}>
            <h1 className="text-[#00df9a] text-3xl m-10 font-gold">Joh.React</h1>
            <ul className='p-4 uppercase'>
                <li className="p-4 border-b border-b-gray-600">Home</li>
                <li className="p-4 border-b border-b-gray-600">Company</li>
                <li className="p-4 border-b border-b-gray-600">Reasources</li>
                <li className="p-4 border-b border-b-gray-600">About</li>
                <li className="p-4">Contacts</li>
            </ul> 
        </div>
    </div>
  )
}

export default Navbar;