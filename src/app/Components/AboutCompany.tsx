import React from 'react'

const AboutTheCompany = () => {
    return (
        <div className='w-full'>
            <div>
                <h2 className='text-3xl font-bold text-gray-700 mb-6'>About the Company</h2>
            </div>
            <div className='w-full grid grid-flow-row md:grid-flow-col md:grid-cols-5'>
                <div className='w-full md:col-span-3'>
                    <p className='text-gray-700'>
                        First Atlantic Industrial Group is primarily focused on the industrial sector, with a portfolio of current and planned projects characterized by substantial investment costs and expertly managed risks.
                    </p>
                    <p className='my-3 text-gray-700'>
                        We prioritize emerging markets and secure funds through equity shares and investments primarily from Europe and North America.
                    </p>
                    <div className='grid grid-flow-row grid-cols-3 gap-0 items-start'>
                        {
                            [{ icon: 'bx bx-world', title: 'Countries', count: 2 },
                            { icon: 'bx bxs-briefcase-alt-2', title: 'Projects', count: 5 },
                            { icon: 'bx bxs-briefcase-alt-2', title: 'Investors Contribution', count: '30%' },
                            { icon: 'bx bx-line-chart', title: 'Project Completion', count: '98%' },
                            { icon: 'bx bx-line-chart', title: 'Project Completion', count: '98%' },
                            { icon: 'bx bx-line-chart', title: 'Project Completion', count: '98%' }
                            ].map(i => (
                                <div className='text-center max-w-fit py-3 mr-3 last:mr-0 flex flex-col items-center justify-center' key={i.title}>
                                    <div className='flex flex-row items-center'>
                                        <div className='rounded-full aspect-square p-3 text-4xl flex flex-row items-center justify-center bg-gray-600 text-white'>
                                            <i className={i.icon}></i>
                                        </div>
                                        <p className='font-bold text-gray-500 ml-2 text-4xl'>{i.count}</p>
                                    </div>
                                    <p className='text-gray-500 text-lg py-3'>{i.title}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='h-58 w-full overflow-hidden md:col-span-2'>
                    <img src='https://images.pexels.com/photos/313737/pexels-photo-313737.jpeg' className='object-cover'></img>
                </div>
            </div>
        </div>
    )
}

export default AboutTheCompany;