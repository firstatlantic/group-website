import React from 'react';

export interface CarouselI { img: string, title: string, subtitle: string, actionText: string, link: string, textColor?: string }

const Carousel = ({ carousels }: { carousels: CarouselI[] }) => {

    const ref: any = React.useRef(null);
    const [width, setWidth] = React.useState(0)
    const [index, setIndex] = React.useState(0)

    React.useEffect(() => {
        if (ref && ref.current)
            setWidth(ref.current.offsetWidth)
    }, []);

    React.useEffect(() => {
        const interval = setInterval(() => {
            let next = index + 1;
            if (next >= carousels.length)
                next = 0
            setIndex(next)
        }, 8000);
        return () => clearInterval(interval);
    }, [index, carousels.length]);


    return (
        <div className='w-full h-full border flex flex-row overflow-hidden relative shadow-xl' ref={ref}>
            {
                width > 0 && <div style={{ width: carousels.length * width, marginLeft: index * -width }}
                    className='flex flex-row transition-all duration-500 ease-out absolute top-0 left-0 bottom-0 right-0'>
                    {
                        carousels.map(({ img, link, title, subtitle, actionText, textColor = "text-white" }) => (
                            <div className={"h-full flex flex-col justify-center relative px-9 sm:px-24 " + textColor} style={{ width }} key={title}>
                                <div className='absolute top-0 left-0 bottom-0 right-0 z-0'>
                                    <img className='w-full h-full overflow-hidden object-cover' src={img} alt='' />
                                </div>
                                <div className='z-10 w-full px-6 py-12'>
                                    <p className='font-bold text-3xl'>{title}</p>
                                    <p className='text-lg line-clamp-3 sm:line-clamp-none my-4 sm:w-full'>{subtitle}</p>
                                    <button className='w-fit shadow-xl bg-blue-950 px-6 py-3 text-white hover:bg-opacity-80' type='button'>
                                        <a href={link}>{actionText}</a>
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            }
            <div className='absolute bottom-0 left-0 right-0 flex flex-row items-center justify-center p-6'>
                {
                    [...new Array(carousels.length)].map((b, i) =>
                        <button onClick={() => setIndex(i)}
                            className={`transition-all duration-500 ease-out aspect-square shadow-2xl bg-white rounded-full mr-3 last:mr-0 ${i === index ? 'w-3' : 'w-2'}`} />)
                }
            </div>
            <div className='absolute top-0 bottom-0 left-0 flex flex-row items-center justify-center px-2 sm:px-6'>
                <button
                    onClick={() => setIndex(index > 0 ? index - 1 : carousels.length - 1)}
                    className='bg-white bg-opacity-50 rounded-full w-12 h-12 font-thin hover:bg-opacity-80'>
                    <i className='bx bx-chevron-left text-4xl'></i>
                </button>
            </div>
            <div className='absolute top-0 bottom-0 right-0 flex flex-row items-center justify-center px-2 sm:px-6'>
                <button
                    onClick={() => setIndex(index < carousels.length - 1 ? index + 1 : 0)}
                    className='bg-white bg-opacity-50 rounded-full w-12 h-12 font-thin hover:bg-opacity-80'>
                    <i className='bx bx-chevron-right text-4xl'></i>
                </button>
            </div>
        </div>
    )
}

export default Carousel;