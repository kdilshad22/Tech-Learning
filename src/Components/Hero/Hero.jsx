import React from 'react' 
import { IoIosArrowRoundForward } from "react-icons/io";
import Navbar from '../Navbar/Navbar';
import Blob from '../../assets/blob.svg';
import HeroPng from '../../assets/hero.png';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
    useEffect(() => {
        AOS.init({
          duration: 700,
          easing: "ease-out-cubic",
        });
      }, []);
  return (
    <section className='bg-light overflow-hidden relative'>
                    <Navbar />
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[430px]  ">
                {/* Brand Info */}
                <div data-aos="fade-right" className='flex flex-col justify-center py-14 md:py-0 relative '>
                    <div className='text-center md:text-left space-y-10 lg:max-w-[400px]'>     
                        <h1
                        className='text-3xl lg:text-4xl font-bold !leading-snug'>
                        Let's learn to build a <span className='text-secondary'>Website </span>
                        for your business
                    </h1>
                    <div className='flex justify-center md:justify-start'>
                        <button className='primary-btn flex items-center gap-2 group'>
                            Get Started
                            <IoIosArrowRoundForward className='text-xl group-hover:translate-x-2 group-hover:duration-300' />
                        </button>
                    </div>
                    </div>
               
                </div>
                {/* Hero Image */}
                <div data-aos="fade-left" className='flex justify-center items-center'>
                    <img  src={HeroPng} alt='not available' className='w-[300px] xl:w-[400px] relative z-10 drop-shadow' />
                    <img src={Blob} alt='not work'
                     className='absolute bottom-31 w-[900px] md:w-[1800px] z-[1] hidden md:block' />
                </div>

        </div>
    </section>
  )
}

export default Hero