import React from 'react'

const HeaderButtons = ({icon, title}) => {
  return (
    <div className='flex gap-2 bg-[#575859] px-4 py-3 rounded-[100px]'>
      <img src={icon} alt="" />
      <h1 className='text-[16px] text-white font-medium leading-[140%] tracking-[-2%] '>{title}</h1>
    </div>
  )
}

export default HeaderButtons
