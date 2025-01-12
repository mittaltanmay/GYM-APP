import React from 'react'

export default function SectionWrapper(props) {
    const {children,header,title,id}=props;
    return (
        <section id={id} className='min-h-screen flex flex-col gap-10'>
            <div className='text-2xl font-medium flex flex-col py-4 justify-center items-center bg-slate-950 gap-4'>
                {header}
                <h2 className='text-3xl sm:text-4xl md:text-6xl font-semibold'>{title[0]} <span className='text-blue-400 uppercase'>{title[1]}</span> {title[2]}</h2>    
            </div>
            <div className='max-w-[800px] w-full flex flex-col mx-auto gap-10'>
                {children}
            </div>
        </section>
    )
}
