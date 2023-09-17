import React from 'react';
import Navigation from './Navigation';

const Header = ({ toggle }: { toggle: () => any }) => {
    return (
        <div className='w-full relative md:flex md:flex-row md:items-center'>
            <div className='w-full text-center md:w-fit'>
                <a className='' href='/'>
                    <div className='py-6'>
                        <p className='font-extrabold text-2xl text-blue-900 whitespace-nowrap'>FIRST ATLANTIC</p>
                        <p className='text-xs tracking-[.42em] text-center font-light whitespace-nowrap'>INDUSTRIAL GROUP</p>
                    </div>
                </a>
                <button type='button' onClick={toggle} className='absolute left-0 top-1/4 md:hidden'>
                    <i className='bx bx-menu text-5xl' ></i>
                </button>
            </div>
            <div className='hidden md:flex sm:flex-row w-full h-full items-center justify-center'>
                <Navigation />
            </div>
            <button className='hidden md:flex m-0 p-0 ml-6' type='button'>
                <i className='bx bx-search bx-sm text-gray-400' ></i>
            </button>
        </div>
    )
}

export default Header;
