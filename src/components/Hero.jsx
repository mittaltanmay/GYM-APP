import React from 'react'

export default function  Hero() {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center text-center mx-auto max-w-[800px] w-full p-4'>
      <p className='text-xl underline decoration-slate-400 font-normal sm:text-4xl'>IT'S TIME TO GET</p>
      <p className='text-5xl font-semibold sm:text-7xl md:text-8xl'>SWOLE<span className='text-5xl text-blue-400 font-medium sm:text-7xl md:text-8xl'>NORMOUS</span></p>
      <p className='mt-10 text-sm mb-14 font-medium md:text-xl'>I<span className='text-blue-400'> TANMAY MITTAL</span> hereby acknowledgement that I may become <span className='text-blue-400'>unbelievably swolenormous</span> and accept all risk of becoming the local <span className='text-blue-400'>mass monstrosity</span>,afflicted with severe body dismorphia,unable to fit through door</p>
      <button onClick={()=>{
        window.location.href='#generate'
      }} className='text-white font-semibold text-base border-2 p-4 px-6 border-blue-400 rounded-md border-solid blueshadow duration-200'>Accept & Begin</button>
    </div>
  )
}
