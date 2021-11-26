import React from 'react'
import { About } from '../UI/about/About'
import { Product } from '../UI/product/Product'
import { Roadmap } from '../UI/roadmap/Roadmap'
import { Footer } from '../UI/footer/Footer'
import { Sponsor } from '../UI/Sponsors/Sponsor'
import { Charity } from '../UI/Charity/Charity'


export const Body = () => {
    return (
        <div className="text-white mt-20 md:flex flex-col justify-center ">
            
            <About />
            <Roadmap/>
            <Product />
            <Footer />
            <Sponsor />
            <Charity />
        </div>
    )
}
