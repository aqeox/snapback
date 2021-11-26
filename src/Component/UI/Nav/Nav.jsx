import React from 'react'

export const Nav = () => {  

    return (
        <div className="flex md:justify-between px-auto md:px-10 mt-5 w-full justify-center items-center">
            <section className=" sm:hidden md:block">
                <img src="/assets/snapback-logo.png" alt="logo" className="w-40 h-40 xl:w-40 xl:h-32"/>
            </section>

            <section className="flex justify-center items-center ">
                <a className="border-solid mr-5" href="."><img className="w-6 m-2 md:h-12 md:w-12" src="/assets/twitter-logo.png" alt="twitter"/></a>
                {/* <a className="border-solid mr-2" href="."><img className="w-6 m-2" src="/assets/opensea-logo.png" alt="twitter"/></a> */}
                <a className="border-solid mr-2" href="."><img className="w-6 m-2 md:h-12 md:w-12" src="/assets/discord.png" alt="twitter"/></a>           
                <button className="bg-black text-white px-6 h-14 md:hidden">Connect wallet</button>
            </section>
            
        </div>
    )
}
