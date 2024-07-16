import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';


function Navbar() {
  const [nav , setnav] = useState(true);

  const handleNav = () => {
    setnav(!nav);
  }
  return (
    <div className='flex justify-between items-center max-w-[1240px] h-24 mx-auto px-4'>
      <h1 className=' font-bold w-full text-[#00df9a] text-3xl'>REACT.</h1>
      <ul className=' text-white hidden md:flex'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Compant</li>
        <li className='p-4'>Resources</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Contact</li>
      </ul>
      <div onClick={handleNav} className='text-white block md:hidden'>
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={!nav ? 'text-white fixed top-0 left-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 ' : 'ease-in-out duration-500 fixed left-[-100%]'}>
      <h1 className=' font-bold w-full text-[#00df9a] text-3xl m-4'>REACT.</h1>
      <li className='p-4 border-b border-gray-600'>Home</li>
        <li className='p-4 border-b border-gray-600'>Compant</li>
        <li className='p-4 border-b border-gray-600'>Resources</li>
        <li className='p-4 border-b border-gray-600'>About</li>
        <li className='p-4'>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar;
