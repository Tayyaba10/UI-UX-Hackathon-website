import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className="w-full">
    
    <div className="">
      <Image
        src="/hero-img/bg-hero.png"
        width={1440}
        height={100}
        alt="Picture of the author"
      />
      <div className="bg-pink md:w-[543px] absolute top-[253px] left-[739px] ">
        <div className='ml-6 mt-8 '>
        <h6 className='text-base font-semibold '>New Arrival</h6>
        <h3 className='text-button text-[52px] font-bold'>Discover Our <br />New Collection</h3>
        <p className='text-lg font-medium mt-2'>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
         elit tellus, luctus nec ullamcorper mattis.</p>
          <button className="bg-button text-textwhite font-bold px-[72px] py-[25px] mt-10 mb-6">BUY NOW</button>
        </div>  
      </div>
    </div>
  </div>
  )
}
