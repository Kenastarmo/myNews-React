import React from 'react'
import Button from '../Button/Button'

const Topbar = () => {
  return (
    <div className='container_red bg-red'>
      <div className='container mx-auto px-[5%] py-[18px] flex justify-between items-center '>
        <div className='left container flex flex-row gap-[30px]  '>
          <p className='topbar-p1 text-[18px] text-white font-semibold leading-normal'>Make MyNews your 
            homepage</p>
          <p className='topbar-p2 text-[18px] text-white font-normal leading-normal'>Every day discover 
            what's trending on the internet!</p>
        </div>
        <div className='right container w-auto flex flex-row  items-center gap-[30px]'>
          <p className='topbar-p1 text-[18px] text-white font-semibold whitespace-nowrap'>No, thanks</p>
          <Button text='GET' color='white' txt_color='black' />
        </div>
      </div>
    </div>
  )
}

export default Topbar