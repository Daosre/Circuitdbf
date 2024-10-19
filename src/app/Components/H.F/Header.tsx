import Image from 'next/image'
import React from 'react'
import "../H.F/h.f_css.css";


const Header = () => {
  return (
    <div className='header flex justify-center mt-2'>
      <Image src={'/Cdb.png'} width={300} height={100} alt='' className='w-full object-cover'/>
    </div>
  )
}

export default Header
