import React from 'react';
import { ServiceItem } from '../../typings/Base';

export const ProjectsAndEngineeringItems: ServiceItem[] =
    [
        {
            title: "Mining and Processing Plants",
            link: "",
            img: "https://www.camelway.com/dm-content/uploads/sand-and-gravel-aggregate-process-plant.jpg",
            description: "Establishment and operation of mining and processing facilities, including aggregates quarries, coal, limestone extraction and processing plants."
        },
        {
            title: "Hotels and Building Construction",
            link: "",
            img: "https://lh3.googleusercontent.com/pw/AIL4fc-CTFV5tGYTnp9sqiyfiQPkLZ_QI1z_br3ccBBmFo4dgQE84WV0PKC_q-wogcmWxUzFySAHGuPq8Ug2b3CM5UN8o7mBfdKhHjdmnGS3qz8U6o3qf0Uu=w2400",
            description: "We excel in the luxury residential and hotel building industry, offering comprehensive services from design to turnkey construction and handover."
        },
        {
            title: "Solar Power Plants",
            link: "",
            img: "https://live.staticflickr.com/5535/14251775702_36f40aa6ec_c.jpg",
            description: "Mining and Processing PlantsMining and Processing Plants"
        },
        {
            title: "Wind Farms",
            link: "",
            img: "https://c0.wallpaperflare.com/preview/120/585/198/park-wind-farm-wind-clouds-energy.jpg",
            description: "Mining and Processing PlantsMining and Processing Plants"
        },
        {
            title: "Electrical Substations",
            link: "",
            img: "https://c1.wallpaperflare.com/preview/52/482/424/energy-distribution-the-conversion-electricity-high-voltage-sky-current.jpg",
            description: "Mining and Processing PlantsMining and Processing Plants"
        },
        {
            title: "Hydro Electric Power Stations",
            link: "",
            img: "https://t3.ftcdn.net/jpg/04/37/50/08/360_F_437500857_qhxmpinxrr2lHoeGIcpTaG9R39AwECvu.jpg",
            description: "Mining and Processing PlantsMining and Processing Plants"
        },
        {
            title: "Gas Turbine Power Plants",
            link: "",
            img: "https://i2.pickpik.com/photos/603/90/439/power-plant-ruskin-fl-florida-ruskin-florida-preview.jpg",
            description: "Mining and Processing PlantsMining and Processing Plants"
        },
        {
            title: "Waste Treatment Plants",
            link: "",
            img: "https://live.staticflickr.com/65535/26444337891_7d5939c698_b.jpg",
            description: "Mining and Processing PlantsMining and Processing Plants"
        },
        {
            title: "Paper Manufacturing",
            link: "",
            img: "https://live.staticflickr.com/8202/8261606627_015043476b_c.jpg",
            description: "Mining and Processing PlantsMining and Processing Plants"
        },
        {
            title: "Roads and Bridges Construction",
            link: "",
            img: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL2ZsNTA0NjMzOTMyOTEtaW1hZ2UuanBn.jpg",
            description: "Mining and Processing PlantsMining and Processing Plants"
        }
    ]


const ProjectsAndEngineeringItem = () => {

    return (
        <ul className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {
                ProjectsAndEngineeringItems.map(item => (
                    <li className='mb-6'>
                        <a href={item.link}>
                            <div className='w-full h-56 bg-red-500 overflow-hidden shadow-lg'>
                                <img src={item.img} className='w-full h-full object-cover hover:scale-150 transition-all duration-500 ease-in-out' />
                            </div>
                        </a>
                        <p className='text-lg xl:text-xl text-gray-900 text-opacity-80 font-bold mt-4 mb-2 line-clamp-1 hover:text-blue-900 transition-all duration-500 ease-in-out'>
                            <a href={item.link}>{item.title}</a>
                        </p>
                        <p className='line-clamp-3 text-gray-600'>{item.description}</p>
                    </li>
                ))
            }
        </ul>
    )
}

export default ProjectsAndEngineeringItem;