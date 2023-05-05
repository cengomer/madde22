import React,{useState} from 'react'
import { Calendar, filter } from '../../assets'
import {Event} from '../../containers/index'
import Data from '../../constants/Data/Data'

const Hero = () => {
  const [showFilter, setShowFilter] = useState(false)
  const [isChecked, setIsChecked] = useState(true);
  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div className='w-full h-full flex-1 flex justify-center items-center flex-col mt-10'>
<div className='w-[100%] h-[52px] bg-[#f5f5f5] flex justify-between items-center md:gap-64 gap-20 z-40'>
<div className='w-full h-full flex justify-center items-center gap-2 z-10'>
<div className='flex justify-center items-center gap-2 z-10'>
<img src={filter} alt='filter__icon' className='cursor-pointer z-10' onClick={() => setShowFilter(!showFilter)}/>
<p className='text-[16px] font-light text-main'>Filtreler</p>
</div>
{
  showFilter && ( 
    <div className='w-full flex justify-center items-center absolute md:top-[45%] top-[32%]'>
    <div className='w-[290px] h-[450px] shoadow-xl shadow-box flex gap-5 justify-center items-start p-8 flex-col bg-white relative z-10 md:ml-0 ml-32'>
    <h1 className='font-semibold'>Etkinlik Mekanı</h1>
<label class="container">Maximum Uniq Hall
  <input 
  type="checkbox"
  value="filter1"
  checked={isChecked}
  onChange={handleCheckboxChange}
  />
  <span class="checkmark"></span>
</label>
<label class="container">Maximum Uniq Box
  <input type="checkbox"/>
  <span class="checkmark"></span>
</label>
<label class="container">Maximum Uniq Lounge
  <input type="checkbox"/>
  <span class="checkmark"></span>
</label>
<label class="container">Maximum Uniq Açıkhava
  <input type="checkbox"/>
  <span class="checkmark"></span>
</label>
<label class="container">Bahçe Fuaye
  <input type="checkbox"/>
  <span class="checkmark"></span>
</label>

<h1 className='font-semibold'>Etkinlik Tarihi</h1>
<label class="container">Güncel Etkinlikler
  <input type="checkbox"/>
  <span class="checkmark"></span>
</label>
<label class="container">Geçmiş Etkinlikler
  <input type="checkbox"/>
  <span class="checkmark"></span>
</label>
    </div>
    </div>
  )
}
</div>
<div className='w-full h-full flex justify-center items-center gap-2'>
<img src={Calendar} alt='Calendar__icon' className='cursor-pointer'/>
<p className='text-[16px] font-light text-black'>Takvimde Gör</p>
</div>
</div>
<div>
{isChecked && <Event />}
</div>
    </div>
  )
}

export default Hero