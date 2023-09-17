import React from 'react';
import { ServiceItem } from '../../typings/Base';
import PageNotYetAvailable from '../../Components/PageNotAvailable';
import HotelsAndBuildingConstruction from '../Engineering/Constructions/HotelsAndBuildingConstructions';

export const getLink = (child: string = ""): string => {
    return `/projects-and-engineering/${child}`
}

export const ProjectsAndEngineeringItems: ServiceItem[] =
    [
        {
            title: "Mining and Processing Plants",
            link: getLink("mining-and-processing-plants"),
            img: "https://www.camelway.com/dm-content/uploads/sand-and-gravel-aggregate-process-plant.jpg",
            description: "Establishment and operation of mining and processing facilities, including aggregates quarries, coal, limestone extraction and processing plants.",
            page: <PageNotYetAvailable />
        },
        {
            title: "Hotels and Building Construction",
            link: getLink("hotels-and-building-construction"),
            img: "https://lh3.googleusercontent.com/pw/AIL4fc-CTFV5tGYTnp9sqiyfiQPkLZ_QI1z_br3ccBBmFo4dgQE84WV0PKC_q-wogcmWxUzFySAHGuPq8Ug2b3CM5UN8o7mBfdKhHjdmnGS3qz8U6o3qf0Uu=w2400",
            description: "We excel in the luxury residential and hotel building industry, offering comprehensive services from design to turnkey construction and handover."
            , page: <HotelsAndBuildingConstruction />
        },
        {
            title: "Solar Power Plants",
            link: getLink("solar-power-plants"),
            img: "https://live.staticflickr.com/5535/14251775702_36f40aa6ec_c.jpg",
            page: <PageNotYetAvailable />,
            description: "Our expertise lies in logistics, procurement, and the installation of solar power farms, seamlessly connecting them to the electrical grid."
        },
        {
            title: "Wind Farms",
            link: getLink("wind-farms"),
            page: <PageNotYetAvailable />,
            img: "https://c0.wallpaperflare.com/preview/120/585/198/park-wind-farm-wind-clouds-energy.jpg",
            description: "Through collaborative efforts between our R&D team, experts, and engineering department, we conduct thorough feasibility studies for both onshore and offshore wind farm projects."
        },
        {
            title: "Electrical Substations",
            link: getLink("electrical-substations"),
            page: <PageNotYetAvailable />,
            img: "https://c1.wallpaperflare.com/preview/52/482/424/energy-distribution-the-conversion-electricity-high-voltage-sky-current.jpg",
            description: "Procurement and installation of electrical substations for high-power-consuming facilities, starting from 700 KW and above. Our approach is meticulously aligned with the country's electricity laws and regulations, ensuring compliance throughout the process."
        },
        {
            title: "Hydro Electric Power Stations",
            link: getLink("hydro-electric-power-stations"),
            page: <PageNotYetAvailable />,
            img: "https://t3.ftcdn.net/jpg/04/37/50/08/360_F_437500857_qhxmpinxrr2lHoeGIcpTaG9R39AwECvu.jpg",
            description: "Exploration and research of promising locations for hydro power dams and oversee their construction. We also conduct thorough environmental impact assessments in the host communities, emphasizing our commitment to sustainability."
        },
        {
            title: "Gas Turbine Power Plants",
            link: getLink("gas-turbine-power-plants"),
            page: <PageNotYetAvailable />,
            img: "https://i2.pickpik.com/photos/603/90/439/power-plant-ruskin-fl-florida-ruskin-florida-preview.jpg",
            description: "Installation and procurement of gas-powered plants, along with the implementation of software systems for comprehensive monitoring. Our services encompass the safe connection of these plants to the electrical grid, all while prioritizing safety considerations and providing essential training."
        },
        {
            title: "Water Treatment Plants",
            link: getLink("water-treatment-plants"),
            page: <PageNotYetAvailable />,
            img: "https://live.staticflickr.com/65535/26444337891_7d5939c698_b.jpg",
            description: "Construction and design of water treatment plants, managing the entire process from commissioning to implementing advanced software systems for continuous monitoring throughout the plant's lifecycle. This includes monitoring chemical components and efficiently delivering treated water to farms and other essential areas"
        },
        {
            title: "Roads and Bridges Construction",
            link: getLink("roads-and-bridges-constructions"),
            page: <PageNotYetAvailable />,
            img: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL2ZsNTA0NjMzOTMyOTEtaW1hZ2UuanBn.jpg",
            description: "Construction of roads and bridges, primarily in developing countries with significant infrastructure needs to drive economic growth. Thanks to our established quarries in many of these countries, we can efficiently deliver these projects within specified timelines."
        },
        {
            title: "Paper Manufacturing",
            link: getLink("papar-manufacturing"),
            img: "https://live.staticflickr.com/8202/8261606627_015043476b_c.jpg",
            page: <PageNotYetAvailable />,
            description: "Paper and pulp manufacturing, which includes sustainable tree harvesting through agroforestry practices. Our commitment to responsible tree cutting ensures environmental sustainability. We also facilitate the export processed pulp to countries beyond our borders"
        },
    ]

const ProjectsAndEngineeringItem = ({ length = 9 }: { length?: number, }) => {

    return (
        <ul className='grid grid-cols-1 md:grid-cols-3 gap-3'>
            {
                ProjectsAndEngineeringItems.slice(0, Math.min(ProjectsAndEngineeringItems.length, length)).map(item => (
                    <li className='mb-6'>
                        <a href={item.link}>
                            <div className='w-full h-56 overflow-hidden shadow-xl'>
                                <img alt='' src={item.img} className='w-full h-full object-cover hover:scale-150 transition-all duration-500 ease-in-out' />
                            </div>
                        </a>
                        <p className='text-lg xl:text-xl text-gray-900 text-opacity-80 font-bold mt-4 mb-2 line-clamp-1 hover:text-blue-900 transition-all duration-500 ease-in-out'>
                            <a href={item.link}>{item.title}</a>
                        </p>
                        <p className='line-clamp-6 sm:line-clamp-3 text-gray-600'>{item.description}</p>
                    </li>
                ))
            }
        </ul>
    )
}

export default ProjectsAndEngineeringItem;