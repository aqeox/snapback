import React from 'react'

export const About = () => {
    return (
        <section className="xl:grid grid-cols-2 xl:pb-20 flex flex-col items-center mx-10 max-w-7xl xl:m-auto">
                <section className=" md:flex md:flex-col xl:pr-32 md:max-w-xl">
                    <h1 className="text-white text-3xl font-extrabold leading-relaxed xl:text-4xl">Welcome To NFTsnapback.</h1>

                    <p className="text-white text-lg md:text-xl leading-loose my-10">The 1st Project dedicated to bring NFT and fashion to the real world.</p>
                    <p className="text-white text-lg md:text-xl leading-loose mb-10">NFTsnapback is the 1st Digi-phsyical NFT that is backed by a physical Snapback.</p>
                    <button className="bg-gradient-to-r from-pink to bg-softPink rounded-lg px-10 py-6 sm:px-20 font-black text-white text-xl md:w-96">Claim CyberKongz NFTsnapback</button>
                </section>

                <section className="flex md:max-w-xl">
                    {/* <video loop autoPlay muted>
                    <source src="/assets/hat1.png" type="video/mp4" className="h-5"/>
                    </video> */}

                    <img src="/assets/hats.png" alt="hat"/>
                </section>
                
         </section>
    )
}
