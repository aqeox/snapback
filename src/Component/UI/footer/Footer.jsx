import React from 'react'

export const Footer = () => {
    return (
        <section className="xl:pt-40 max-w-7xl xl:m-auto">
            <h1 className="text-center text-2xl lg:text-4xl font-bold">Meet The Team</h1>

            <section className="flex justify-evenly xl:mt-20 flex-col xl:flex-row xl:gap-20">
                <section className="text-center">
                    <img src="/assets/Chris-Rock.webp" alt="Chris Rock" className="m-auto rounded-full"/>
                    <p className=" max-w-md mt-10 md:m-auto p-10">Over +4 Year in the space of Crypto & Blockchain.
                    Show Production Manager @ Ladz City Network.
                    A passion for NFT & Community lead Projects.</p>
                </section>

                <section className="text-center">
                    <img src="/assets/Manny.webp" alt="Manny" className="m-auto rounded-full"/>
                    <p className=" max-w-md mt-10 md:m-auto p-10">A full stack dev.
                    Working across some of the biggest projects in the space.
                    Recognised by the work he has done with Bryan with NimBuds.
                    Recently joined PunksComics team,
                    & helping and assisting with NFTsnapback.</p>
                </section>
            </section>
           
        </section>
    )
}
