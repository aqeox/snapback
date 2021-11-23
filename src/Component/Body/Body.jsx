import React from 'react'
import { About } from '../about/About'
import { Product } from '../product/Product'
import { Roadmap } from '../roadmap/Roadmap'
import { Footer } from '../footer/Footer'
import { Sponsor } from '../Sponsors/Sponsor'


export const Body = () => {
    return (
        <div className="text-white mt-20 md:flex flex-col justify-center ">
            
            <About />
            <Product />
            <Roadmap/>
            <Footer />
            <Sponsor />
        </div>
    )
}
