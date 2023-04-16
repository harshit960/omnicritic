import React from 'react';

const images = [954, 654, 756, 547, 756, 787, 456, 846, 756, 159,456,458,766,862,784,136]
export default function
  () {
  return (
    <div className='relative'>

      {
        images.map((img) =>
          <div className='relative bg-black'>

            <div className=''>
              <div className='relative  '>
                <img src={"https://picsum.photos/id/" + img + "/600/400"} />

                <div className='absolute bottom-0 text-white grid grid-cols-2 pl-2 pb-2 bg-gradient-to-tr from-black to-transparent w-full flex'>
                  <div className=''>
                    <h3 className=' '>
                      img by
                    </h3>
                    <h3 className=''>
                      small txt
                    </h3>
                  </div>
                  <div className='right-0 flex place-content-end pr-4 pt-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>




                  </div>
                </div>

              </div>
              <div className=''>
                <div className='p-0 m-0 bg-black'>
                  <input type="range" min="1" max="5" class="slider" step="0.01" id="myRange"></input>
                </div>
                <div className='bg-black mt-0 pb-2'>
                  <ul className='grid grid-cols-3'>
                    <li className=' place-content-center flex'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path className=' text-white' strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                    </svg>

                    </li>
                    <li className=' place-content-center flex'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path className=' text-white' strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                    </svg>

                    </li>
                    <li className=' place-content-center flex'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path className=' text-white' stroke-linecap="round" stroke-linejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )
      }


    </div>
  )
}
