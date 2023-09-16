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
        img: "https://lh3.googleusercontent.com/pw/AIL4fc-CTFV5tGYTnp9sqiyfiQPkLZ_QI1z_br3ccBBmFo4dgQE84WV0PKC_q-wogcmWxUzFySAHGuPq8Ug2b3CM5UN8o7mBfdKhHjdmnGS3qz8U6o3qf0Uu=w2400",
        title: "Real Estates and Constructions",
        subtitle: "Our team of skilled Engineers and Architects helps bring modern residential buildings to life.",
        actionText: "More Details",
        link: "https://www.instagram.com/first_atlantic_homes/",
        textColor: 'text-blue-950'
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