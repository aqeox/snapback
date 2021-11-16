import React from 'react'

export const Product = () => {
    return (
        <div className="grid grid-cols-4 text-center gap-10 h-96 mx-10">
            <section className="bg-softBlue rounded-xl flex flex-col justify-center before:bg-red-500 ">
                <h1>Cocain Cowboy</h1>
                <img src="/assets/cocain-cowboy.png" alt="cocain-cowboy" className=""/>
            </section>

            <section className="bg-softBlue rounded-xl flex flex-col justify-center">
                <h1>Cocain Cowboy</h1>
                <img src="/assets/cocain-cowboy.png" alt="cocain-cowboy"/>
            </section>

            <section className="bg-softBlue rounded-xl flex flex-col justify-center">
                <h1>Cocain Cowboy</h1>
                <img src="/assets/cocain-cowboy.png" alt="cocain-cowboy"/>
            </section>

            <section className="bg-softBlue rounded-xl flex flex-col justify-center">
                <h1>Cocain Cowboy</h1>
                <img src="/assets/cocain-cowboy.png" alt="cocain-cowboy"/>
            </section>
        </div>
    )
}
