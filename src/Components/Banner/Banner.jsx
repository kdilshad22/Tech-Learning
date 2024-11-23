import React from 'react'
import BannerPng from '../../assets/education.png';
import { GrUserExpert } from "react-icons/gr";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";






const Banner = () => {
  return (
    <section>
      
        <div className='container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-8 md:space-y-0'>
            {/* Banner Image */}
            <div data-aos="fade-right" className='flex justify-center items-center'>
                <img src={BannerPng} alt='not working' className='w-[350px] md:max-w-[450px] object-cover drop-shadow'/>
            </div>
            {/* Banner Text */}
            <div className='flex flex-col justify-center'>
                <div className='text-center md:text-left space-y-12'>
                    <h1 data-aos="fade-right" className='text-3xl md:text4xl font-bold !leading-snug'>The World's Leading Online Learning Platform</h1>
                    <div className='flex flex-col gap-6 cursor-pointer'>
                        <div data-aos="fade-left" className='flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-gray-200 duration-200'>
                            <FaBookReader className='text-2xl' />
                            <p className='text-lg'>10,000 Courses</p>
                        </div>
                        <div data-aos="fade-right" className='flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-gray-200 duration-200'>
                            <GrUserExpert className='text-2xl' />
                            <p className='text-lg'>Expert Instraction</p>
                        </div>
                        <div data-aos="fade-left" className='flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-gray-200 duration-200'>
                            <MdOutlineAccessTime className='text-2xl' />
                            <p className='text-lg'>Lifetime Access</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner