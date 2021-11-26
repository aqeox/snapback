import React from 'react'

export const Sponsor = () => {
    return (
        <div className="flex flex-col xl:grid xl:grid-cols-2 bg-black p-10 xl:gap-5 mt-20 relative">
            <section className="bg-white rounded-lg flex justify-center items-center p-5 mb-10">
                <img src="/assets/Rizzle.png" alt="logo" className=" w-36 h-16"/>
            </section>
            
            <section className="bg-white rounded-lg flex justify-center items-center p-5 mb-10">
                <img src="/assets/curate.svg" alt="logo" className=" w-36 h-16"/>
            </section>

            <section className="bg-white rounded-lg flex justify-center items-center p-5 mb-10">
                <img src="/assets/Rizzle.png" alt="logo" className=" w-36 h-16"/>
            </section>
            
            <section className="bg-white rounded-lg flex justify-center items-center p-5 mb-10">
                <img src="/assets/curate.svg" alt="logo" className=" w-36 h-16"/>
            </section>
        </div>
    )
}
