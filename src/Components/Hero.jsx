import { ReactTyped } from "react-typed";


function Hero() {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] mx-auto h-screen w-full flex justify-center text-center flex-col">
        <p className="font-bold text-[#00df9a] p-2">GROWING WITH DATA ANALYTICS</p>
        <h1 className="font-bold text-4xl sm:text-6xl md:text-7xl md:py-6">Grow with data.</h1>
        <div className="flex justify-center items-center">
        <p className="font-bold text-xl sm:text-4xl md:text-5xl py-4 text-white">Fast, flexible financing for</p>
      <ReactTyped className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-gray-500' strings={['BTB', 'BTC', 'SASS']} typeSpeed={120} backSpeed={140} loop />
      </div>
      <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
      <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
      </div>
    </div>
  ) 
}

export default Hero;
