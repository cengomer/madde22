import React, { useState } from 'react'
import { Logo, Search } from '../../assets'
import {FiMenu,FiX} from 'react-icons/fi'
const Navbar = () => {
  const [activeNavItem, setActiveNavItem] = useState("Tüm Etkinlikler");
  const [isMobile, setIsMobile] = useState(false);

  return (
    <div className='w-full h-full flex-1 flex justify-center items-center flex-col'>
      <div className='mt-[37px] flex flex-col justify-center items-center'>
        <img src={Logo} alt='madde22_logo' className='w-[59.61px] h-[63px] md:block hidden' />
        <h1 className='md:text-[32px] text-[24px] font-bold mt-[55px]'>ETKİNLİKLER</h1>
      </div>
      <div className='w-full h-full flex-1 flex justify-center items-center gap-10 mt-[40px]'>
        {["Tüm Etkinlikler","Tiyatro","Konser","Stand Up","Sinema","Çocuk"].map((nav) => (
          <div key={nav} className='md:block hidden'>
            <a
              href={`#${nav.replace(/\s+/g, '')}`}
              className={`text-[16px] font-light text-black hover:text-main
               ${activeNavItem === nav ? 'border-b-2 border-main text-main font-semibold p-[10px]' : ''}`}
              onClick={() => setActiveNavItem(nav)}
            >
              {nav}
            </a>
          </div>
        ))}
        <div className='w-full h-full md:hidden flex justify-center items-start'>
        {!isMobile ?
         <FiMenu onClick={() => setIsMobile(true)} size={25} className='absolute left-1/2 ml-[-1rem]'/> :
         <FiX onClick={() => setIsMobile(false)} size={25} className='absolute left-1/2 ml-[-1rem]'/>}
        {isMobile && ( 
          <div className='w-full h-full  flex justify-center items-center flex-col mt-10 ml-[-0.7rem]'>
          {["Tüm Etkinlikler","Tiyatro","Konser","Stand Up","Sinema","Çocuk"].map((nav) => (
          <div key={nav} className='w-full h-full flex justify-center items-center'>
            <a
              href={`#${nav.replace(/\s+/g, '')}`}
              className={`text-[16px] font-light text-black hover:text-main
               ${activeNavItem === nav ? 'border-b-2 border-main text-main font-semibold' : ''}`}
              onClick={() => setActiveNavItem(nav)}
            >
              {nav}
            </a>
          </div>
        ))}
</div>
        )}
        
        </div>
        <div className='w-[200px] h-[48px] relative mr-[-225px] left-40 md:block hidden'>
      <input type='search' className='w-full h-full border border-bor pl-[28px] outline-none placeholder:text-[14px] placeholder:text-tex' placeholder='Etkinlik Ara' />
      <img src={Search} alt='search_img' className='w-[18px] h-[18px] absolute left-2 top-1/2 transform -translate-y-1/2' />
    </div>
      </div>
    </div>
  )
}

export default Navbar
