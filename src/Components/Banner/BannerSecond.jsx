import React from 'react';
import BannerSeconde from '../../assets/banner.png';







const BannerSecond = () => {
  return (
    <section>
      
        <div className='container py-14 md:py-[122px] grid grid-cols-1 md:grid-cols-2 gap-8 space-y-8 md:space-y-0'>
          {/* Banner Text */}
          <div className='flex flex-col justify-center'>
            <div data-aos="fade-left" className='text-center md:text-left space-y-4 lg:max-w-[450px]'>
                <h1 className='text-4xl font-bold !leading-snug'>Join Our Community to Start Your Journey </h1>
                <p className='text-dark2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                  Fuga, aperiam ullam! Ab voluptatibus labore, dolor natus velit, 
                  Rem, nisi repudiandae!</p>
                  <a href="#" className='primary-btn !mt-8'>Join Now</a>
            </div>
            </div>
            {/* Banner Image */}
            <div data-aos="fade-right" className='flex justify-center items-center'>
                <img src={BannerSeconde} alt='not working' className='w-[350px] md:max-w-[450px] object-cover drop-shadow'/>
            </div>
            
        </div>
    </section>
  )
}

export default BannerSecond