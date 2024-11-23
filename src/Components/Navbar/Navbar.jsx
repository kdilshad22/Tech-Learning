import React from 'react'
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';


const Navbar = () => {
    const [nav,setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }
    const NavabrMenu = [
        {
            id: 1,
            title: "Home",
            path: "/",
        },
        {
            id: 2,
            title: "Services",
            link: "</Services>",
        },
        {
            id: 3,
            title: "About Us",
            link: "#",
        },
        {
            id: 4,
            title: "Our Team",
            link: "#",
        },
        {
            id: 5,
            title: "Contact Us",
            link: "#",
        },
    ];
  return (
    <nav data-aos="fade-down" className='relative z-20'>
        <div className='container py-10 flex justify-between items-center'>
            {/* Logo Section */}
            <div>
                <h1 className='font-bold text-2xl cursor-pointer'>Tech Learning</h1>
            </div>
            {/* Menu Section */}
            <div className=' hidden lg:block'>
                <ul className='flex items-center gap-3'>
                    {NavabrMenu.map((menu) =>(
                        <li key={menu.id}>
                            <a href={menu.path} className='inline-block py-2 px-3 hover:text-secondary relative cursor-pointer'>{menu.title}</a>
                        </li>
                    ))}
                    <button className='primary-btn'>Sign In</button>
                </ul>

            </div>
            {/* Mobile Humburger icon */}
            <div onClick={handleNav} className='block lg:hidden cursor-pointer' >
            { nav ?  < IoMdClose size={20} /> : <IoMdMenu  size={20}/>    }
          </div>
          {/* mobile humburger menu section */}
          <div className={ nav ? 'fixed left-0 top-0 w-[93%] h-[500px] border-r lg:hidden  bg-white ease-in-out duration-500' 
                                : 'fixed left-[-100%]'}>
                <h1 className='font-bold text-2xl cursor-pointer m-3'>Tech Learning</h1>

          <ul >
                    {NavabrMenu.map((menu) =>(
                        <li key={menu.id} className='p-6'>
                            <a href={menu.path} >{menu.title}</a>
                        </li>
                    ))}
                    <button className='primary-btn m-4'>Sign In</button>
                </ul>
          </div>
        </div>
    </nav>
  )
}

export default Navbar