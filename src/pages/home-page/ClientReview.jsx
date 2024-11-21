import React from 'react'
import Testimonials from './Testimonials'

const ClientReview = () => {
  return (
    <div className='w-11/12 mx-auto ' >
      <div>
        <div className='my-10' >
            <p className='text-center font-bold lg:text-[20px] md:text-[17px] text-[12px] text-[#ff3811] ' >Testimonial</p>
            <h1 className='font-bold lg:text-[45px] md:text-[35px] text-center  ' >What Customer Says</h1>
            <div className='w-[50%] mx-auto ' >
                <p className='text-center lg:text-[16px] texxt-[11px]  ' >the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
        </div>
        <div>
        <Testimonials/>
        </div>
      </div>
    </div>
  )
}

export default ClientReview
