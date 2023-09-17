import React from 'react';
import { Routes } from './Navigation';

const MobileNavigation = () => {
    const [open, setOpen] = React.useState("");
    return (
        <ul className='flex flex-col w-full overflow-y-scroll'>
            {
                Routes.map(route => (
                    <li className='p-6 px-9 border-b border-gray-300 flex flex-col'>
                        <div className='flex flex-row items-center justify-between'>
                            <p className='text-xl font-bold'>
                                {route.title}
                            </p>
                            {route.children.length > 0 &&
                                <button type='button' onClick={() => setOpen(open === route.title ? "" : route.title)}>
                                    <i className='bx bx-chevron-down text-3xl font-thin'></i>
                                </button>}
                        </div>
                        {
                            route.children.length > 0 &&
                            <div className={`mt-6 pl-3 ${open === route.title ? 'visible' : 'hidden'}`}>
                                {
                                    route.children.map(child => (
                                        <p className='p-5 border-b border-gray-00 text-xl font-light last:border-none last:pb-0'>
                                            <a href={child.link}>{child.title}</a>
                                        </p>
                                    ))
                                }
                            </div>
                        }
                    </li>
                ))
            }
        </ul>
    )
}

export default MobileNavigation;