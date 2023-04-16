import React from 'react'

export default function
  () {
  return (
    <div className='backdrop-blur-3xl backdrop-saturate-200 backdrop-brightness-50 backdrop-contrast-150 sticky top-0 z-10'>
      <div className='grid grid-cols-2'>
        <h1 className='py-4 px-5 text-left font-bold text-white'>
          Omnicritic

        </h1>
        <div className='py-4 px-5 flex place-content-end'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path className='text-white' strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>

        </div>
      </div>
    </div>
  )
}
