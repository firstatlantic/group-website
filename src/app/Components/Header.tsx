import React from 'react';
import Navigation from './Navigation';

const Header = () => {
    return (
        <div className='w-full relative md:flex md:flex-row md:items-center'>
            <div className='w-full text-center md:w-fit'>
                <a className='' href='/'>
                    <div className='py-6'>
                        <p className='font-extrabold text-2xl text-blue-900 whitespace-nowrap'>FIRST ATLANTIC</p>
                        <p className='text-xs tracking-[.42em] text-center font-light whitespace-nowrap'>INDUSTRIAL GROUP</p>
                    </div>
                </a>
                <i className='bx bx-menu text-5xl absolute left-0 top-1/4 md:hidden' ></i>
            </div>
            <div className='hidden md:flex sm:flex-row w-full h-full items-center justify-center'>
                <Navigation />
            </div>
            <div className='hidden md:flex'>
                <i className='bx bx-search bx-sm m-0 p-0 text-gray-400 ml-6' ></i>
            </div>
        </div>
    )
}

export default Header;
