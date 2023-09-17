import React from 'react';
import Footer from './Footer';
import Header from './Header';
import MobileNavigation from './MobileNavigation';

const PageWrapper = (props: any) => {
    const [showNav, setShowNav] = React.useState(false)
    const toggleNav = () => { setShowNav(!showNav) }
    return (
        <div className="flex flex-col w-full h-full text-gray-700">
            <div className='sticky top-0 bg-white shadow-lg z-30'>
                <div className='w-full md:w-4/4 lg:w-3/4 xl:w-5/7 px-6 md:px-0 md:mx-auto'>
                    <Header toggle={toggleNav} />
                </div>
            </div>
            <hr className='w-full m-0 p-0' />
            <div className='px-6 md:px-0 md:mx-auto md:w-4/4 lg:w-3/4 xl:w-5/7'>
                {props.children}
            </div>
            <hr className='w-full m-0 p-0' />
            <div className='bg-gray-100'>
                <div className='mx-auto md:w-4/4 lg:w-3/4 xl:w-5/7 px-6 md:px-0'>
                    <Footer />
                </div>
            </div>
            <div className='fixed overflow-scroll top-0 left-0 right-0 bottom-0 bg-white md:hidden z-50' style={{ marginLeft: showNav ? '0' : '100%' }}>
                <button type='button' onClick={toggleNav}>
                    <i className='bx bx-x text-5xl ml-6 mt-6' ></i>
                </button>
                <MobileNavigation />
                <div className='p-9 pt-3'>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default PageWrapper;
