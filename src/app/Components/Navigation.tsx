import React from 'react';
import { ProjectsAndEngineeringItems, getLink } from '../Pages/Home/ProjectsAndEngineering';
import { useLocation } from 'react-router-dom';

interface RouteI { title: string, link: string }

export const Routes: { title: string, id: string, children: RouteI[], link: string }[] = [
    {
        title: "About Us",
        id: "aboutus",
        link: "about-us",
        children: [
            {
                title: "About the Company",
                link: ""
            },
            {
                title: "Focus Industries",
                link: ""
            },
            {
                title: "Investor Relations",
                link: ""
            },
            {
                title: "Latest Projects",
                link: ""
            },
            {
                title: "Questions and Answers",
                link: ""
            }
        ]
    },
    {
        title: "Focus Industries",
        id: "ind",
        link: "focus-industries",
        children: [{
            title: "Real Estate and Construction",
            link: ""
        },
        {
            title: "Energy and Power",
            link: ""
        },
        {
            title: "Mining and Quarrying",
            link: ""
        },
        {
            title: "Manufacturing",
            link: ""
        },
        {
            title: "Finance",
            link: ""
        },
        {
            title: "Consulting",
            link: ""
        }
        ]
    },
    {
        title: "Projects and Engineering",
        id: "ind",
        link: getLink(),
        children: ProjectsAndEngineeringItems
    },
    {
        title: "News and Events",
        id: "ind",
        link: "news-and-events",
        children: []
    },
    {
        title: "Contact Us",
        id: "ind",
        link: "contact-us",
        children: []
    }
]

const Navigation = () => {
    const { pathname } = useLocation();
    return (
        <ul className='flex flex-row w-full justify-around h-full'>
            {
                Routes.map((route) => (
                    <li className={`group h-full ${pathname.includes(route.link) ? 'border-b-4 border-blue-900' : ''}`}>
                        <button type='button' className='text-lg xl:text-xl font-bold py-9 hover:text-blue-900'>
                            {route.title}
                            {
                                route.children.length > 0 && <span className='ml-3 text-gray-400'>
                                    <i className='bx bxs-chevron-down'></i>
                                </span>
                            }
                        </button>
                        <ul className='bg-white border-t-4 shadow-xl z-30 border-blue-900 hidden group-hover:block absolute top-full mx-auto min-w-max'>
                            {
                                route.children.map(child => (
                                    <li className='px-6 py-4 border-b border-gray-200 last:border-b-0 hover:text-blue-900'>
                                        <a href={child.link} className='pr-16'>{child.title}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </li>
                ))
            }
        </ul>
    )
}

export default Navigation;