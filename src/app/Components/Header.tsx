import React from 'react';
import Navigation from './Navigation';

const Header = () => {
    return (
        <div className='w-ful flex flex-row justify-between items-center relative'>
            <a className='' href='/'>
            <div className='mr-12'>
                <p className='font-extrabold text-2xl text-blue-900 whitespace-nowrap'>FIRST ATLANTIC</p>
                <p className='text-xs tracking-[.45em] text-center font-thin'>INDUSTRIAL GROUP</p>
            </div>
            </a>
            <div className='flex flex-row w-full h-full items-center justify-center'>
                <Navigation />
            </div>
            <div>
                <i className='bx bx-search bx-sm m-0 p-0 text-gray-400 ml-6' ></i>
            </div>
        </div>
    )
}

export default Header;
