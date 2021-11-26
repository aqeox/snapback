import React from 'react'

export const Charity = () => {
    return (
        <div className= "flex flex-col xl:grid grid-cols-3 text-center">
            <section className="flex">
                <img src="/assets/charity1.webp" alt="charity" className="w-full" />
            </section>

            <section className=" max-w-md m-auto mx-10">

                <h1 className="text-center text-4xl pt-5 font-bold">NFT SNAPBACK</h1>
                <p className="pt-10"> I have been over the last 2 Years as an individual supporting Young Teens and paying for there tuition and Higher education Degrees. </p>
                <p className="pt-10"> I want to carry that over to a scale where I can not only do that but also provide additional needs like building roads, community centres, cleaning the streets for cleaner environment, education hubs and soo much more. </p>
                <p className="pt-10"> A certain % of profits will be dedicated to the charity programme.​</p>
                <p className="pt-10"> % of the Profits will go towards developing the village and town I come from, and provide a better future for children and young adults,
                    one that I was fortunate to get. </p>
                

                <h1 className="text-center text-xl py-10">CHARITY SCHEME</h1>
            </section>

            <section className="flex">
                <img src="/assets/charity2.webp" alt="charity" className="w-full"/>
            </section>
        </div>
    )
}
