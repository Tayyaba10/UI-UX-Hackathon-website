import React from 'react'
import Image from 'next/image'

export default function Slide() {
  return (
    <div>
      <div className="w-full bg-bgpink flex items-center">
        <div className="w-[422px] pt-9 ml-[100px]">

        <h4 className=" font-bold text-[40px] text-blackheading ">50+ Beautiful rooms inspiration</h4>
        <p className='font-medium text-base text-textgray mb-4'>
          Our designer already made a lot of beautiful 
          prototipe of rooms that inspire you
        </p>
        <button className="bg-button w-[176px] h-[48px] text-white p-2 ">Exlore More</button>
        </div>

        <div className='ml-14'>
        <Image src={'/slideimg/inner.png'} width={404} height={582} alt="Picture of the author" />
        </div>

        <div className='ml-8 mb-24'>
        <Image src={'/slideimg/dining.png'} width={372} height={486} alt="Picture of the author" />
        </div>

      </div>
    </div>
  )
}
