import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-20 bg-slate-400  rounded-2xl '>
      <div className='mx-6 flex justify-between'>
        <img src="/logo.svg" alt='logo' className='w-36 h-16'/>
        <div className='flex gap-8 my-auto'>
          <a href='/home'>Home</a>
          <a href='/home'>Demo</a>
          <a href='/home'>Pricing</a>
          <a href='/home'>Contact</a>
        </div>
        <div className='flex my-auto'>
         <p className='mr-6 my-auto text-sm font-bold '> Book a demo | Login</p>
          <button className='w-32 h-10 bg-slate-800 text-slate-100 rounded-md hover:bg-slate-900 transition-colors'>
            Try demo
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar