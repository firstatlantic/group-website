import React from 'react';

const Footer = () => {
    return (
        <div className='grid grid-flow-row py-6 gap-6 sm:grid-flow-col sm:grid-cols-5'>
            <div className='grid grid-flow-row gap-6 sm:grid-flow-col sm:col-span-4'>
                <div className='text-sm text-gray-500'>
                    <p>(c) 2023 First Atlantic Industrial Group</p>
                    <p>All Rights Reserved</p>
                </div>
                <div>
                    <p className='font-bold text-gray-700 mb-6'>Contact Us</p>
                    <div className='flex flex-row items-center mb-3'>
                        <i className="bx bxs-map bx-sm text-gray-700 mr-3"></i>
                        <p className='m-0'>Theodor Heuss Strasse 11, 67663 Kaiserslautern, Germany</p>
                    </div>
                    <div className='flex flex-row items-center mb-3'>
                        <i className="bx bxs-envelope bx-sm text-gray-700 mr-3"></i>
                        <p className='text-gray-700'>contact@firstatlanticindustries.com</p>
                    </div>
                    <div className='flex flex-row items-center'>
                        <i className="bx bxs-phone-call bx-sm text-gray-700 mr-3"></i>
                        <p className='text-gray-700'>+49 1525 8664 308</p>
                    </div>
                </div>
            </div>
            <div className='sm:col-span-1'>
                <p className='font-bold text-gray-700 mb-6'>Stay in touch</p>
                <div className='flex flex-row last:mr-0'>
                    <a className='mr-2' href='/'>
                        <img alt='' className='w-8 h-8 object-contain' src='https://cdn2.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-whatsapp-circle-512.png'></img>
                    </a>
                    <a className='mr-2' href='/'>
                        <img alt='' className='w-8 h-8 object-contain' src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/facebook-round-color-icon.png'></img>
                    </a>
                    <a className='mr-2' href='/'>
                        <img alt='' className='w-8 h-8 object-contain' src='https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png'></img>
                    </a>
                    <a className='mr-2' href='/'>
                        <img alt='' className='w-8 h-8 object-contain' src='https://toppng.com/uploads/preview/instagram-logo-circle-11549679754rhbcorxntv.png'></img>
                    </a>
                    <a className='mr-0' href='/'>
                        <img alt='' className='w-8 h-8 object-contain' src='https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/telegram-512.png'></img>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;
