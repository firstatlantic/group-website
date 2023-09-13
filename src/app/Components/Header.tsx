import React from 'react';

const Header = () => {
    return (
        <div className='w-ful py-9 flex flex-row justify-between'>
            <div className='mr-12'>
                <p className='font-extrabold text-2xl text-blue-900 whitespace-nowrap'>FIRST ATLANTIC</p>
                <p className='text-xs tracking-[.45em] text-center font-thin'>INDUSTRIAL GROUP</p>
            </div>
            <div className='flex flex-row w-full'>
                <ul className='font-bold text-lg flex flex-row w-full justify-around'>
                    <li>
                        <button type='button'>
                            About Us
                            <span className='ml-6 text-gray-400'>
                                <i className='bx bxs-chevron-down'></i>
                            </span>
                        </button>
                    </li>
                    <li>
                        <button type='button'>
                            Industries
                            <span className='ml-6 text-gray-400'>
                                <i className='bx bxs-chevron-down'></i>
                            </span>
                        </button>
                    </li>
                    <li>
                        <button type='button'>
                            Services
                            <span className='ml-6 text-gray-400'>
                                <i className='bx bxs-chevron-down'></i>
                            </span>
                        </button>
                    </li>
                    <li>
                        <button type='button'>
                            Contact Us
                        </button>
                    </li>
                </ul>
            </div>
            <div>
                <i className='bx bx-search bx-md text-gray-400 ml-6' ></i>
            </div>
        </div>
    )
}

export default Header;
