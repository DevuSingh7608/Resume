import React from 'react'

export default function Experience() {
  return (
    <div className='relative min-h-screen pt-32 pb-20 px-6 overflow-hidden '>
      <div className="fixed inset-0 pointer-events-none -z-10 bg-purple/10">
        <div className="absolute top-[20%] left-[-10%] w-125 h-125 bg-blue-600/10 rounded-full blur-30" />
        <div className="absolute bottom-[20%] right-[-10%] w-125 h-125 bg-purple-600/10 rounded-full blur-30" />
      </div>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <span className='inline-block px-4 py-2 bg-black/5 border border-black/10 backdrop-blur-sm text-sm font-semibold  text-cyan-400 rounded-lg hover:bg-black/80'>Career Journey
          </span>
          <h1 className='text-5xl lg:text-7xl font-bold mb-6 text-black/70'>
            Experience
          </h1>

          <div className="relative flex justify-center items-center gap-10 mt-40">
            <div className="group absolute bg-black/5 border border-black/5 hover:border-cyan-500/50 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-xl">
              <p className=' text-3xl text-semibold mb-2'>Spaceway</p>
              <p className='text-gray-600 group-hover:text-black transition-colors'>Frontend Developer</p>
              <p className='text-gray-600 group-hover:text-black transition-colors'>Jan-2026 - cont..</p>
              <p className='text-gray-600 group-hover:text-black transition-colors'>Internship</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}   
