import React from 'react'

export const Footer = () => {
    return (
        <section className="pt-20 relative lg:px-28 mx-10 max-w-7xl xl:m-auto">
            <img src="assets/golden_pyramyd.png" alt="pyramid" className="absolute -right-6 w-20 h-20 lg:right-40" />
            <h1 className="text-4xl font-extrabold text-gray">Who are we?</h1>
            <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink to-softPink">Creative teams</h1> 
                   
            <section className="pt-14">
                <p className="text-gray leading-loose">Hi! Mattey & Matt. B are two friends currently focusing on 3D & Art direction. We have been working hard to establish our own style, and we're continuously looking for new ways to push ourselves. We also worked with Apple, Microsoft, MTV, Adobe, Adidas, Nike and more!</p>
            </section>
        </section>
    )
}
