import React from 'react'
import { facebook, instagram, linkedin, whatsapp, youtube, logo } from '../assets'

const Footer = () => {
  return (
    <div className="overflow-hidden h-[100%] py-20 bg-bubbles-bg bg-cover bg-center bg-no-repeat z-0 w-full items-center mt-10">
      <h3 className="text-center text-[25px] font-bold mb-[10px] text-black-100">LavaJet</h3>
      <img src={logo} alt="logo" className="h-[150px] mx-auto" />
      {/* <div className="flex mt-[30px] justify-center gap-8">
        <img src={facebook} alt="" className='h-[45px] hover:cursor-pointer'/>
        <img src={instagram} alt="" className='h-[45px] hover:cursor-pointer'/>
        <img src={linkedin} alt="" className='h-[45px] hover:cursor-pointer'/>
        <img src={whatsapp} alt="" className='h-[45px] hover:cursor-pointer'/>
        <img src={youtube} alt="" className='h-[45px] hover:cursor-pointer'/>
      </div> */}
    </div>
  )
}

export default Footer