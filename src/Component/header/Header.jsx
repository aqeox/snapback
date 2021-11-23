import React from 'react'
import { Nav } from '../Nav/Nav'

export const Header = () => {
    return (
        <header className="flex flex-col w-full relative items-center xl:h-0">
            {/* <video loop autoPlay muted 
            className="absolute top-0 bottom-0 left-0 right-0 w-full h-full sm:object-cover md:object-fill object-center"
            >
                <source src="assets/hero-vid.mp4" type="video/mp4" />
            </video> */}

            <Nav />
            
            {/* <button className="mt-10 sm:mt-40 bg-black px-10 py-6 sm:px-20 font-black text-white text-xl md:w-96">CLAIM</button> */}
        </header>
    )
}



