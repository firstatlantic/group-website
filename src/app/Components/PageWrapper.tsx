import React from 'react';
import Footer from './Footer';
import Header from './Header';

const PageWrapper = (props: any) => {
    return (
        <div className="flex flex-col w-full h-full">
            <div className='mx-auto md:w-4/4 lg:w-3/4 xl:w-4/6'>
                <Header />
            </div>
            <hr className='w-full m-0 p-0' />
            <div className='mx-auto md:w-4/4 lg:w-3/4 xl:w-4/6'>
                {props.children}
            </div>
            <hr className='w-full m-0 p-0' />
            <div className='bg-gray-100'>
                <div className='mx-auto md:w-4/4 lg:w-3/4 xl:w-4/6'>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default PageWrapper;
