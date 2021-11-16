import React from 'react'
import { Nav } from '../Nav/Nav'

export const Header = () => {
    return (
        <header className="flex flex-col w-full relative xl:h-90" 
        style={{clipPath: 'polygon(0 0, 100% 0, 100% 80%, 50% 100%, 50% 100%, 0 80%)'}}>
            <video loop autoPlay muted 
            className="absolute top-0 bottom-0 left-0 right-0 w-full h-full sm:object-cover md:object-fill object-center">
                <source src="assets/hero-vid.mp4" type="video/mp4" />
            </video>

            <Nav />
            <button className="mt-52 bg-royalBlue mx-10 px-10 py-6 font-black text-white text-xl">View on Opensea</button>
        </header>
    )
}
