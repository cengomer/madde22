import React, { useState } from 'react'
import { Address, EventImg1, add, added } from '../../assets'
import Data from '../../constants/Data/Data'
import Swal from 'sweetalert2';

const Event = () => {
  const [events, setEvents] = useState(Data)
  
  const toggleIsAdded = (id) => {
    setEvents(prevEvents => prevEvents.map(event => {
      if (event.id === id) {
        return {
          ...event,
          isAdded: !event.isAdded
        }
      }
      return event
    }))
  }
  
  return (
    <div className='w-full h-full flex-1 flex flex-col gap-[16px] justify-center items-center mt-[60px] mb-20'>
      {events.map((etkinlik) => (
        <div key={etkinlik.id} className={`md:w-[1064px] w-[344px] md:h-[204px] h-[410px] flex justify-start items-start md:flex-row flex-col border border-tex relative ${etkinlik.isAdded ? 'bg-white shadow-xl shadow-box' : ''}`}>
          <div className='md:w-[200px] w-[344px] md:h-[204px] h-[212px] flex md:relative absolute justify-center md:items-start items-center flex-col md:text-main text-white font-semibold bg-black'>
            <div className='text-center md:ml-[15px] ml-[0%] md:w-[32px] w-[135px] md:h-[96px] h-[40px] md:text-[16px] text-[18px] md:mt-0 mt-[-10rem]'>
              <p>{etkinlik.date}</p>
            </div>
          </div>
          <div className={`w-[100px] h-[22px] flex justify-center  md:items-center items-start bg-${etkinlik.color} absolute md:left-[70px] left-[-30px] top-[32px] md:z-10 z-0`}>
            <h1 className='text-white font-semibold text-[14px] z-10'>{etkinlik.type}</h1>
          </div>
          <div className='flex md:flex-row flex-col items-center justify-center md:gap-10'>
            <div className='w-[308px] h-[172px] md:ml-[-7rem] md:z-0 z-10'>
              <img className='w-full h-full md:my-[16px] my-[54px] md:mx-0 mx-[16px]' src={etkinlik.image} alt='event__img' />
            </div>
            <div className='flex justify-start items-start flex-col'>
              <div className='flex md:flex-row flex-col justify-between items-center md:gap-10 gap-5 md:mt-5 mt-20'>
                <div>
                  <h1 className='text-[18px] font-semibold md:w-full w-[277px] md:h-full h-[52px]'>{etkinlik.title}</h1>
                  <div className='md:flex hidden justify-start items-center gap-2 my-[10px]'>
                    <img src={Address} alt='address__icon' />
                    <p className='text-tex text-[14px] font-light'>{etkinlik.place}</p>
                  </div>
                  <p className='md:w-[416px] w-[277px] text-[16px] font-medium text-black md:block hidden'>
                    {etkinlik.description}
                  </p>
                  <p className='w-[277px] h-[26px] text-[18px] md:hidden block mt-2'>
                  {etkinlik.mobile}<span className='font-black cursor-pointer underline'>Detaylı Bilgi</span>
                  </p>
                </div>
                <div className='flex md:justify-start justify-center md:items-start items-center md:gap-0 gap-3 md:mt-0 mt-[-0.7rem] md:flex-col flex-row '>
                <a className='md:w-[166px] w-[147px] h-[48px] text-semibold text-white bg-main text-center flex justify-center items-center mb-2 cursor-pointer'
   onClick={() => {
     const btn = document.querySelector('.bg-main');
     btn.innerHTML = 'Biletiniz Alınıyor...';
     Swal.fire({
       title: 'Bilet aldığınız için teşekkürler!',
       text: 'İyi konserler!',
       icon: 'success',
       confirmButtonColor: '#FF0D87',
       confirmButtonText: 'Tamam',
       backdrop: `
         rgba(0,0,123,0.4)
         url("https://media.giphy.com/media/lMameLIF8voLu8HxWV/giphy.gif")
       `
     }).then(() => {
       btn.innerHTML = 'Bilet Al';
     });
   }}>
   Bilet Al
</a>
                  <div className='flex justify-start items-start gap-2'>
                    <img
                      src={etkinlik.isAdded ? added : add}
                      onClick={() => toggleIsAdded(etkinlik.id)}
                      className='cursor-pointer'
                    />
                    <p className='text-black font-light'>{etkinlik.isAdded ? 'Takvime Eklendi' : 'Takvime Ekle'}</p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Event
