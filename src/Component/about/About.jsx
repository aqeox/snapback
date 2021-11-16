import React from 'react'

export const About = () => {
    return (
        <section className="xl:grid grid-cols-2 xl:pb-40 xl:mx-10">
                <section className="lg:pr-28  xl:mt-10">
                    <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-pink to-softPink text-3xl font-extrabold leading-relaxed xl:text-5xl">8,888 unique Mekas</h1>
                    <h1 className="text-3xl font-extrabold xl:text-5xl">who need Drivers.</h1>


                    <p className="mt-10 text-gray text-xl leading-loose">The MekaVerse is a collection of 8,888 generative Mekas with hundreds of elements inspired by the Japan Mecha universes.</p>

                    <p className="mt-10 text-gray text-xl leading-loose">Each artwork is original, with its own color palette and creation. The objective was to make each Meka unique in order to prioritize quality above quantity.</p>
                </section>

                <section className="flex 
                ">
                    <video loop autoPlay muted>
                    <source src="/assets/about-vid.mp4" type="video/mp4" className="h-5"/>
                    </video>
                </section>
                
         </section>
    )
}
