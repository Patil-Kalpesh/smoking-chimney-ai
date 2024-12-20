import React from 'react';

export default function index() {
  return (
    <>
    
      <div className="container mx-auto px-[40px] py-[60px]">
          <h2 className=" lg:text-[48px] lg:py-[10px] leading-normal font-medium">Talk with our decision makers</h2>
          <p className="text-[22px]">The team AI-powered wonder elevates mundane tasks into the astounding. </p>
          <p className="text-[22px] pt-[20px]">Whether Hollywood-worthy stories to profound user experiences, we&apos;re the first place to look for unprecedented changes in the digital realm.</p>
          <div className="pt-[38px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 gap-y-14">
              <div className="card-item lg:p-4 ">
                  <div>
                    <p className="text-[18px] py-2 border-b-[1px] border-black text-[#ED5729]">hi@smokingchimneystudios.com </p>
                    <p className="text-[#00000080]">Professional, accessible, and secure.</p>
                  </div>
                  <div className="pt-[30px]">
                    <p className="text-[18px] py-2 border-b-[1px] border-black text-[#ED5729]">+91 77219 12611 </p>
                    <p className="text-[#00000080]">Dedicated, assist, and quick.</p>
                  </div>
                  <div className="pt-[30px]">
                    <p className="text-[18px] py-2 border-b-[1px] border-black text-[#ED5729]">Punawale, PCMC, Pune - 411033, Maharashtra, India Jablonskistrasse 15, 10405 Berlin San Francisco, U.S.A</p>
                    <p className="text-[#00000080]">As Largest as Life, Conversations and Coffee</p>
                  </div>
              </div>
              <div className="card-item lg:p-4 ">
                  <div>
                  <div className="sm:col-span-4">
                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                     Name
                    </label>
                    <div className="mb-2">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-4">
                    <label htmlFor="number" className="block text-sm font-medium leading-6 text-gray-900">
                     Number
                    </label>
                    <div className="mb-2">
                      <input
                        id="number"
                        name="number"
                        type="number"
                        autoComplete="number"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-4">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                      Email address
                    </label>
                    <div className="mb-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-4">
                    <label htmlFor="massage" className="block text-sm font-medium leading-6 text-gray-900">
                      Massage
                    </label>
                    <div className="mb-2">
                      <input
                        id="massage"
                        name="massage"
                        type="text"
                        autoComplete="massage"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className=' pt-4'>
                    <button className=' rounded-lg bg-[#ED5729] text-white px-8 py-1'>Let us level up in tandem!</button>
                 </div>
                  </div>
              </div>
          </div>
      </div>
  
   </>
  )
} 