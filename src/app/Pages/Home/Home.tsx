import React from 'react';
import Carousel, { CarouselI } from '../../Components/Carousel';
import ProjectsAndEngineeringItem from './ProjectsAndEngineering';
import AboutTheCompany from '../../Components/AboutCompany';


const Banner: CarouselI[] = [
    {
        img: "https://p1.pxfuel.com/preview/415/616/866/quarry-entrance-heavy-machines-quarrying.jpg",
        title: "Granite Quarrying",
        subtitle: "First Atlantic is creating and running aggregates quarry in an environmentally responsible way!",
        actionText: "Become a Depositor",
        link: "/"
    },
    {
        img: "https://www.en-former.com/wp-content/uploads/2022/05/RWE-Enformer-Rystad-Energy-Report-Header-gross.jpg",
        title: "Sustainable Energy",
        subtitle: "We place a high value on sustainable energy sources like wind farms. Currently, we are actively exploring wind energy production in specific market areas across the globe.",
        actionText: "More Details",
        link: "/",
    },
    {
        img: "https://lh3.googleusercontent.com/pw/AIL4fc-CTFV5tGYTnp9sqiyfiQPkLZ_QI1z_br3ccBBmFo4dgQE84WV0PKC_q-wogcmWxUzFySAHGuPq8Ug2b3CM5UN8o7mBfdKhHjdmnGS3qz8U6o3qf0Uu=w2400",
        title: "Real Estates and Constructions",
        subtitle: "Our team of skilled Engineers and Architects helps bring modern residential buildings to life.",
        actionText: "More Details",
        link: "https://www.instagram.com/first_atlantic_homes/",
        textColor: 'text-blue-950'
    },
    {
        img: "https://careertraining.ed2go.com/common/images/2/20377/pro-consulting-practice-935x572.jpg",
        title: "Business Consulting",
        subtitle: "Expert business consulting services in sectors like mining, energy, building, and construction. We focus on selected markets where our extensive knowledge and experience come into play.",
        actionText: "More Details",
        link: "/"
    },
    {
        img: "https://www.adp.com/-/media/adp/blog/articles/featuredimages/d/i/diversity-equity-and-inclusion-using-data-to-understand-whats-working-and-what-needs-work_820983.jpg?rev=d7f3dbdae5d24f54973c15672f1b8a77&hash=4426BA1316BAAF77E7BDEFC3535ABC17",
        title: "Hiring new talent",
        subtitle: "We're on the lookout for fresh talent! If you have the drive and commitment to excel in delivering top-quality work, we invite you to join us. Are you up for the challenge?",
        actionText: "Apply for a position",
        link: "/"
    }
]

const Home = () => {

    return (
        <div className='w-full py-6'>
            <div className='w-full h-96 sm:h-128'>
                <Carousel carousels={Banner} />
            </div>
            <hr className='my-6' />
            <div className='w-full'>
                <div className='flex flex-row justify-between items-center mb-6'>
                    <p className='text-3xl text-gray-700 font-bold'>First Atlantic Services</p>
                    <p className='text-blue-900 text-right'>Projects and Engineering</p>
                </div>
                <div className='w-16 h-1 bg-blue-900 mb-3' />
                <div className='w-full mt-12 grid grid-flow-row gap-6 sm:grid-flow-col sm:grid-cols-6'>
                    <div className='w-full sm:col-span-2 sm:pr-6'>
                        <p className='text-xl text-gray-800'>
                            At First Atlantic Industrial Group, we are a collection of companies primarily dedicated to the industrial sector.
                            Our focus spans across various industries, including
                            mining,
                            energy,
                            construction,
                            real estate, and
                            manufacturing, operating in a handlful countries worldwide.</p>
                        <p className='text-gray-700 mt-6'>
                            Thanks to the visionary leadership of our founders, the Group is poised for remarkable progress and promising opportunities. We anticipate significant milestones in terms of market exploration, project commencement, and successful completion.</p>
                        <p className='text-gray-700 mt-6'>
                            While we do have a presence in developed countries, emerging markets hold a special place in our priorities. These markets provide the ideal arena for us to leverage our industrial expertise and address a wide range of challenges.
                        </p>
                        <p className='text-gray-700 mt-6'>
                            We have a significant presence in Africa, particularly in Nigeria. In recent times, we have actively participated in the real estate and construction as well as mining and quarrying sectors, achieving outstanding results and gaining valuable experience in emerging markets.</p>
                        <p className='text-gray-700 mt-6'>
                            As the world embraces the shift toward sustainable energy, we are taking significant steps to expand our operations in this sector, with a particular focus on Europe and America.
                        </p>
                        <p className='text-gray-700 mt-6'>
                            Our Research and Development team, along with our Advanced Operations team, is actively exploring opportunities on a global scale.
                        </p>
                        <p className='text-gray-700 mt-6 italic font-bold'>
                            We are actively seeking partners and investors worldwide. If you believe you can contribute to our vision, whether as an investor or a technical expert, please don't hesitate to get in touch with us.
                        </p>
                        <button className='w-full md:w-fit mt-6 bg-blue-900 text-white px-9 py-3 hover:bg-blue-950 transition-all duration-500 ease-in-out' type='button'>
                            Contact Us
                        </button>
                    </div>
                    <div className='sm:mt-6 sm:col-span-4'>
                        <ProjectsAndEngineeringItem length={9} />
                        <p><a href='/' className='text-blue-900 underline hover:text-blue-700 transition-colors duration-500 ease-in-out'>More on Projects & Engineering &rarr;</a></p>
                    </div>
                </div>
            </div>
            <hr className='my-6' />
            <div className='w-full'>
                <AboutTheCompany />
            </div>
            <hr className='my-6' />
            <div className=' text-white flex-col justify-center px-6 md:px-16 flex w-full h-fit py-6 md:py-0 md:h-128 overflow-hidden bg-cover bg-[url(https://img.freepik.com/premium-photo/algorithm-flow-artificial-intelligence-technology-global-big-data-storage-network-futuristic-science-background-3d-rendering_634443-681.jpg)] '>
                <p className='text-xl md:text-5xl font-bold'>We're actively seeking technical experts!</p>
                <p className='md:w-1/2 md:text-xl mt-3 bg-black bg-opacity-40 p-3'>We are always on the lookout for technical industrial experts, whether you're at the beginning of your career or a seasoned professional. If you have the skills and passion it takes, we invite you to reach out to us and be a part of our exciting research and investment endeavors!
                </p>
                <div className='mt-3'>
                    <button className='shadow-3xl w-full md:w-fit px-6 py-3 bg-blue-950 text-white text-lg mr-6'>I am an experienced professional</button>
                    <button className='shadow-3xl w-full md:w-fit px-6 py-3 bg-black text-white text-lg mt-3'>I am young professional</button>
                </div>
            </div>
        </div>
    )
}

export default Home;