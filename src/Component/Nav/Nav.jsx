import React from 'react'

export const Nav = () => {
    return (
        <div className="flex justify-between mx-auto mt-20">
            <a className="border-solid border border-white mr-2" href="."><img className="w-6 m-2" src="/assets/twitter-logo.png" alt="twitter"/></a>
            <a className="border-solid border border-white mr-2" href="."><img className="w-6 m-2" src="/assets/opensea-logo.png" alt="twitter"/></a>
            <a className="border-solid border border-white mr-2" href="."><img className="w-6 m-2" src="/assets/discord.png" alt="twitter"/></a>           
            <button className="bg-black text-white px-6">Connect wallet</button>
        </div>
    )
}
