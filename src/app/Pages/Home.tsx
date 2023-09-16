import React from 'react';
import Carousel, { CarouselI } from '../Components/Carousel';

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
            <div className='w-full h-128'>
                <Carousel carousels={Banner} />
            </div>
        </div>
    )
}

export default Home;