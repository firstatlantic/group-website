import React from 'react'
import ProjectsAndEngineeringItem, { ProjectsAndEngineeringItems, getLink } from '../Home/ProjectsAndEngineering'
import { useLocation } from 'react-router-dom'
import BreadCrumbs, { CrumbsI } from '../../Components/BreadCrumbs'


export const EngineeringPageWrapper = ({ title, children, crumbs = [] }: { title: string, children: any, crumbs?: CrumbsI[] }) => {
    const { pathname } = useLocation();
    return (
        <div className='py-6'>
            <BreadCrumbs crumbs={[{ title: 'Home', link: '/' }, { title: 'Projects and Engineering', link: getLink() }, ...crumbs]} />
            <p className='text-3xl font-bold my-9'>{title}</p>
            <div className='md:grid md:grid-flow-row md:grid-cols-8 md:gap-12'>
                <div className='md:col-span-2'>
                    <ul className='flex flex-row overflow-x-scroll pb-6 no-scrollbar md:pb-0 md:flex-col md:border border-gray-300 md:shadow-xl'>
                        {
                            ProjectsAndEngineeringItems.map(item => {
                                const isActive = pathname.includes(item.link)
                                return (
                                    <a href={item.link}>
                                        <li className={`md:p-5 md:pl-6 md:text-lg md:mr-0 mr-3 whitespace-nowrap p-3 min-w-fit ${isActive ? 'text-white bg-blue-950 font-bold' : ''}`}>
                                            {item.title}
                                        </li>
                                    </a>

                                )
                            })
                        }
                    </ul>
                </div>
                <div className='w-full flex md:col-span-6'>
                    {children}
                </div>
            </div>
        </div>
    )
}

const EngineeringPage = () => {
    return (
        <EngineeringPageWrapper title={"Projects and Engineering"}>
            <ProjectsAndEngineeringItem />
        </EngineeringPageWrapper>
    )
}

export default EngineeringPage