import React from 'react';
export interface CrumbsI { title: string, link: string }
const BreadCrumbs = ({ crumbs = [] }: { crumbs: { title: string, link: string }[] }) => {
    return (
        <div className='w-full'>
            {
                crumbs.map((crumb, i) => (
                    <div className='inline-block' key={crumb.title}>
                        <a className='text-sm md:text-lg text-gray-500 whitespace-nowrap' href={crumb.link}>{crumb.title}</a>
                        {
                            i < crumbs.length - 1 && <i className='bx bx-chevron-right mx-2'></i>
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default BreadCrumbs;