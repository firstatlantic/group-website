import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

const PageWrapper = (props: any) => {
    return (
        <div className="flex flex-col w-full h-full">
            <div className='mx-auto sm:w-4/4 md:w-3/4 xl:w-2/4'>
                <Header />
            </div>
            <div className='mx-auto sm:w-4/4 md:w-3/4 xl:w-2/4'>
                {props.children}
            </div>
            <hr className='w-full' />
            <div className='bg-gray-100'>
                <div className='mx-auto sm:w-4/4 md:w-3/4 xl:w-2/4'>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default PageWrapper;
