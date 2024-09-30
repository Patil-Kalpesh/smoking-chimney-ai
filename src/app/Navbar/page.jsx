import React from 'react'
const navLinks =[
    {name:"Solutions"},
    {name:"Technology"},
    {name:"Company"},
    {name:"Contact"}
]
function page() {

  return (
    <div >
        <nav className=' flex w-full items-center justify-between px-[20px] py-[20px] lg:mx-auto lg:px-[40px]'>
           <div className="w-full grid lg:grid-cols-3 grid-cols-2 items-center">
            <div className=''><img src="/images/logo/smoking-chimney-logo.png" alt="Traced" /></div>
            <nav className='hidden lg:block'>
                <ul className='flex gap-[24px] justify-center items-center'>
                    {navLinks.map((item,index)=>(
                        <li className='flex justify-center items-center px-4 ' key={index}>
                            <a className='group text-[15px] h-[20px] inline-block overflow-y-hidden relative'>
                            <div className='group-hover:translate-y-[-100%] transition-all ease-[cubic-bezier(0.16, 1, 0.3, 1)] duration-500 opacity-70'>
                                {item.name}
                            </div>
                            <div className='group-hover:translate-y-[-100%] transition-all ease-[cubic-bezier(0.16, 1, 0.3, 1)] duration-500'>
                                {item.name}
                            </div>
                            </a>
                        </li>
                        
                    ))}
                  
                </ul>
            </nav>
            <div className='flex justify-end '>
                <button className='hidden lg:block rounded-lg bg-[#ED5729] text-white px-8 py-1'>Find Your Solution here!</button>
                <p className='text-end lg:hidden block'>Menu</p>
            </div>
            </div>
        </nav>
    </div>
  )
}

export default page