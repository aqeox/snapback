import React, { useEffect, useState, useRef } from 'react'


export const Roadmap = () => {

    const [scrollPosition, setScrollPosition] = useState(0);

    const elHeight = useRef(null)

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {

        
        


        window.addEventListener('scroll', handleScroll, { passive: true });
        console.log(elHeight.current.clientHeight)
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }

        
        
    }, [])



    useEffect(() => {

        var frameNumber = 0, // start video at frame 0
        // lower numbers = faster playback
        playbackConst = 500, 
        // get page height from video duration
        setHeight = document.getElementById("setHeight"), 
        // select video element         
        vid = document.getElementById('vid'); 
        // var vid = $('#v0')[0]; // jquery option

        // dynamically set the page height according to video length
        vid.addEventListener('loadedmetadata', function() {
        setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
        });


        // Use requestAnimationFrame for smooth playback
        function scrollPlay(){  
        var frameNumber  = window.pageYOffset/playbackConst;
        vid.currentTime  = frameNumber;
        window.requestAnimationFrame(scrollPlay);
        }
        
        if (scrollPosition > 1400) {
            window.requestAnimationFrame(scrollPlay);
        }
    }, [scrollPosition])

     //start950px end 2700p

    

    // scrollPosition >= 900 ?  :  : console.log("keke")

    const setImagePosition = () => {
        let styles = {}
        if (scrollPosition >= 950){
            const firstStyle = {
               transform: `translateY(${scrollPosition}px)`
            }
            styles = Object.assign(styles,firstStyle)
        } else {
           return {transform: `translateY(1050px)`}
        }
        
        if (scrollPosition <= 2700){
            const firstStyle = {
               transform: `translateY(${scrollPosition}px)`
            }
            styles = Object.assign(styles,firstStyle)
        } else {
           return {transform: `translateY(2700px)`}
        }
        return styles
    }


    return (
        <section className="pb-20 mx-6 lg:pl-28 text-white font-medium max-w-7xl xl:pt-32 relative" id="setHeight" >
                <section className="text-center max-w-3xl xl:m-auto" >
                    <h1 className="text-4xl font-bold pb-10 text-transparent text-white">Welcome To NFTsnapback.</h1>
                    <p className="text-white leading-loose text-md">This roadmap outlines our goals and where we want to take MekaVerse. We have a lot of ideas and concepts that we are working on. It may evolve over time and hopefully become even better!</p>
                </section>

                <section ref={elHeight}  className="mt-16 relative"  >
                    <aside className="w-1 h-60 bg-gradient-to-b from-primaryGold to-secondaryGold absolute left-5"  />

                    <aside className=" w-5 h-5 transform -rotate-45 bg-primaryGold relative top-24 left-3 shadow-def" />
                    
                    <aside className=" w-px bg-gray absolute left-21 top-60 -bottom-16" />
                    {/* <img src={image} alt="front" className="absolute right-px -top-2/4 w-500" style={setImagePosition()}/> */}

                    <video id="vid" muted className="absolute right-px w-500 -top-2/4" style={setImagePosition()} >
                    <source src="/assets/hats-spin.mp4" type="video/mp4"  />
                    </video>
                <section>

                        

                        <main className=" bg-darkgray w-full mt-5 max-w-2xl rounded-lg">

                            <div className="ml-14 py-14 mr-9">
                                <h1 className="text-xl text-white font-bold">.01</h1>

                                <h1 className="text-2xl font-extrabold pb-8 text-white">SNAPSHOT</h1>
                                <p className="leading-loose text-whiteSmoke">We will soon be taking a SNAPSHOT of the CYBERKONGZ Smart Contract.
                                Only 1 NFT will be Airdropped per Account.
                                Only appx 210 will be allocated out of 275 NFT's.</p>
                            </div>
                        </main>
                    </section>

                    <aside className=" w-5 h-5 transform -rotate-45 bg-primaryGold relative top-24 left-3 shadow-def" />

                    {/* <section className="relative h-full">
                        <aside className=" w-px h-96 bg-gray absolute left-6 top-32" />
                    </section> */}

                    <section>
                        <main className="bg-darkgray w-full mt-5 max-w-2xl rounded-lg">

                            <div className="ml-14 py-14 mr-9">
                                <h1 className="text-xl text-white font-bold">.02</h1>

                                <h1 className="text-2xl font-extrabold pb-8 text-white">AIRDROP</h1>
                                <p className="leading-loose text-whiteSmoke">Once SNAPSHOT is complete, we will mint the NFT's, and randomly assign each NFT to the Eth address, that was randomly selected also.
                                </p>
​                                <p>There will be 3 kept behind</p>
                                <ul>
                                    <li>: #1 for charity auction</li>
                                    <li>: 1 for giveaway</li>
                                    <li>: 1 To claim myself</li>
                                </ul>
                            </div>
                        </main>
                    </section>

                    <aside className=" w-5 h-5 transform -rotate-45 bg-primaryGold relative top-24 left-3 shadow-def" />

                    <section>
                        <main className="bg-darkgray w-full mt-5 max-w-2xl rounded-lg">

                            <div className="ml-14 py-14 mr-9">
                                <h1 className="text-xl text-white font-bold">.03</h1>

                                <h1 className="text-2xl font-extrabold pb-8 text-white">CLAIM</h1>
                                <p className="leading-loose text-whiteSmoke">Once the production of the physical Snapback is complete you will be able to come to the website and claim the physical NFTsnapback.There will be subject to $15 Shipping fee to claim your Physical NFTsnapback</p>
                            </div>
                        </main>
                    </section>

                    <aside className=" w-5 h-5 transform -rotate-45 bg-primaryGold relative top-24 left-3 shadow-def" />

                    <section>
                        <main className="bg-darkgray w-full mt-5 max-w-2xl rounded-lg">

                            <div className="ml-14 py-14 mr-9">
                                <h1 className="text-xl text-white font-bold">.04</h1>

                                <h1 className="text-2xl font-extrabold pb-8 text-white">SHIPPED</h1>
                                <p className="leading-loose text-whiteSmoke">You can expect that we are excited to have the NFTsnapback go out to the community as soon as possible upon receiving your order.
                                You will be notified and receive the track-and-trace details of your Parcel.Any other relevant information regarding your order will be communicated using the email address you provided.</p>
                            </div>
                        </main>
                    </section>

                    <aside className=" w-5 h-5 transform -rotate-45 bg-primaryGold relative top-24 left-3 shadow-def" />

                    <section>
                        <main className="bg-darkgray w-full mt-5 max-w-2xl rounded-lg">

                            <div className="ml-14 py-14 mr-9">
                                <h1 className="text-xl text-white font-bold">.05</h1>

                                <h1 className="text-2xl font-extrabold pb-8 text-white">NFT Snapback</h1>
                                <p className="leading-loose text-whiteSmoke">I have been over the last 2 Years as an individual supporting Young Teens and paying for there tuition and Higher education Degrees.I want to carry that over to a scale where I can not only do that but also provide additional needs like building roads, community centres, cleaning the streets for cleaner environment, education hubs and soo much more. A certain % of profits will be dedicated to the charity programme. % of the Profits will go towards developing the village and town I come from, and provide a better future for children and young adults, one that I was fortunate to get.
</p>
                            </div>
                        </main>
                    </section>
                </section>
            </section>
    )
}
