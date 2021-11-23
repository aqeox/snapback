import React from 'react'

export const Product = () => {
    return (
        <div className=" flex flex-col items-center p-5 xl:px-14 xl:grid grid-cols-2 mt-14 xl:grid-cols-5 text-center gap-5 sm xl:h-52 max-w-7xl xl:m-auto">
            <section className="bg-softBlue rounded-lg flex flex-col justify-center pb-5 md:max-w-xl transform transition duration-500 xl:hover:scale-110">
                <h1>Avatar</h1>
                <img src="/assets/avastars.png" alt="cocain-cowboy" className=""/>
            </section>

            <section className="bg-softBlue rounded-lg flex flex-col justify-center pb-5 md:max-w-xl transform transition duration-500 xl:hover:scale-110">
                <h1>Drippies</h1>
                <img src="/assets/drippies.png" alt="cocain-cowboy"/>
            </section>

            <section className="bg-softBlue rounded-lg flex flex-col justify-center pb-5 md:max-w-xl transform transition duration-500 xl:hover:scale-110">
                <h1>Cocain Cowboy</h1>
                <img src="/assets/cocain-cowboy.png" alt="cocain-cowboy"/>
            </section>

            <section className="bg-softBlue rounded-lg flex flex-col justify-center pb-5 md:max-w-xl transform transition duration-500 xl:hover:scale-110">
                <h1>Punks</h1>
                <img src="/assets/unofficial-punks.png" alt="cocain-cowboy"/>
            </section>

            <section className="bg-softBlue rounded-lg flex flex-col justify-center pb-5 md:max-w-xl transform transition duration-500 xl:hover:scale-110">
                <h1>Cocain Cowboy</h1>
                <img src="/assets/cocain-cowboy.png" alt="cocain-cowboy"/>
            </section>
        </div>
    )
}
