import React from 'react'
import Spline from '@splinetool/react-spline'

const Page3d = () => {
  return (
    <div className='w-full h-full'>
    <div>
    <Spline scene="https://prod.spline.design/yIbC-Tb5TySQwRgs/scene.splinecode" />
    </div>
        <div className='absolute z-10 top-60 right-20 w-72'>
          <h1 className='text-slate-200 text-4xl'>PLAY WITH JOY</h1>
          <p className='text-slate-500 text-sm mt-10'>Our commitment to excellence drives us to continuously innovate, ensuring that you stay ahead in today's dynamic industry . Whether you're a seasoned professional or just starting, MarcoPolo is here to empower your journey.</p>
          <div className='w-32 h-10 bg-slate-600 text-center mt-6 pt-3 text-slate-300 text-xs font-bold rounded-sm hover:bg-slate-700 cursor-pointer'>
            Try our demo
          </div>

        </div>
        <div className='absolute z-10 bottom-1 left-[40%] text-xs text-slate-600'>
            <p>Did you know? You can play with above interface</p>
          </div>
    </div>
  )
}

export default Page3d