import React from 'react';
import Footer from './Footer';
import Header from './Header';

const PageWrapper = (props: any) => {
    return (
        <div className="flex flex-col w-full h-full">
            <div className='sticky top-0 bg-white shadow-lg z-30'>
                <div className='w-full md:w-4/4 lg:w-3/4 xl:w-5/7 px-6 md:px-0 md:mx-auto'>
                    <Header />
                </div>
            </div>
            <hr className='w-full m-0 p-0' />
            <div className='mx-auto md:w-4/4 lg:w-3/4 xl:w-5/7 px-6 md:px-0'>
                {props.children}
            </div>
            <hr className='w-full m-0 p-0' />
            <div className='bg-gray-100'>
                <div className='mx-auto md:w-4/4 lg:w-3/4 xl:w-5/7 px-6 md:px-0'>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default PageWrapper;
