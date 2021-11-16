import React from 'react'
import { About } from '../about/About'
import { Product } from '../product/Product'
import { Carousel } from '../Carousel/Carousel'
import { Roadmap } from '../roadmap/Roadmap'
import { Footer } from '../footer/Footer'


export const Body = () => {
    return (
        <div className="text-white mt-20 border-2 border-solid md:flex flex-col justify-center ">
            
            <About />
            <Product />
            <Roadmap/>
            <Footer />
        </div>
    )
}
