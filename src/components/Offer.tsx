import Image from 'next/image'
import React from 'react'

const Offer = () => {
  return (
    <div className='bg-black h-screen flex flex-col md:flex-row'>
     {/* Text Container*/}
   <div className='flex-1'></div>
     {/* Image Container*/}
   <div className='flex-1 w-full relative'>
<Image src="/offerProduct.png" alt='' fill className='object-contain'/>
   </div>
    </div>
  )
}

export default Offer