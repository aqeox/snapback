import React, { useEffect, useState, useRef } from 'react'


export const Roadmap = () => {

    const [scrollPosition, setScrollPosition] = useState(0);
    const [windowWidth, setWidth] = useState(0);

    const elHeight = useRef(null)

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {

        function handleResize() {
           setWidth(window.innerWidth)

        }
         
        window.addEventListener('resize', handleResize)

        window.addEventListener('scroll', handleScroll, { passive: true });
        console.log(elHeight.current.clientHeight)
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])



    useEffect(() => {
        if (scrollPosition > 1400) {
             
            const playbackConst = window.innerWidth >= 1024 ? 550 : 800, 
            
            setHeight = document.getElementById("setHeight"),          
            vid = document.getElementById('vid'); 
                    
            vid.addEventListener('loadedmetadata', function() {
            setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
            });
    
            function scrollPlay(){  
            var frameNumber  = window.pageYOffset/playbackConst;
            vid.currentTime  = frameNumber;
            window.requestAnimationFrame(scrollPlay);
            }
            
            
            window.requestAnimationFrame(scrollPlay);
        }
       
    }, [scrollPosition])

    const setImagePosition = () => {
        let styles = {}
        if (scrollPosition >= 940){
            const firstStyle = {
               position: 'fixed',
               top: '100px'
            }
            styles = Object.assign(styles,firstStyle)
        } else {
           return {
               position: 'absolute',
               top: '10px'
        }
        }
        
        if (scrollPosition <= 2880){
            const firstStyle = {
               position: 'fixed',
               top: '10%'
            }
            styles = Object.assign(styles,firstStyle)
        } else {
           return {
               position: 'absolute',
               top: '85%'
            }
        }
        return styles
    }

    console.log(windowWidth)


    return (
        <section className="mx-6 lg:pl-28 text-white font-medium max-w-7xl xl:pt-32 relative" id="setHeight" >
                <section className="text-center max-w-3xl xl:m-auto" >
                    <h1 className="text-4xl font-bold pb-10 text-transparent text-white">NFTsnapback Journey So Far..</h1>
                    <p className="text-white leading-loose text-md">This roadmap outlines our goals and where we want to take MekaVerse. We have a lot of ideas and concepts that we are working on. It may evolve over time and hopefully become even better!</p>
                </section>

                <section ref={elHeight}  className="mt-16 relative"  >
                    <aside className="w-1 h-60 bg-gradient-to-b from-primaryGold to-secondaryGold absolute left-5"  />

                    <aside className=" w-5 h-5 transform -rotate-45 bg-primaryGold relative top-24 left-3 shadow-def" />
                    
                    <aside className=" w-px bg-gray absolute left-21 top-60 -bottom-16" />
                    {/* <img src={image} alt="front" className="absolute right-px -top-2/4 w-500" style={setImagePosition()}/> */}

                    <video id="vid" muted className="absolute w-500 right-0 hidden xl:flex" style={setImagePosition()} >
                    <source src="/assets/hats-spin.mp4" type="video/mp4"  />
                    </video>
                <section>

                        

                        <main className=" bg-darkgray w-full mt-5 max-w-2xl rounded-lg">

                            <div className="ml-14 py-14 mr-9">
                                <h1 className="text-xl text-white font-bold">.01</h1>

                                <h1 className="text-2xl font-extrabold pb-8 text-white">How It Started</h1>
                                <p className="leading-loose text-whiteSmoke">As mention through many medium posts the idea of NFTsnapback came from while being in the OG Channel in the cyberkong discord. Discussing Kongz merchandise early summer I wanted to created Snapback for the community. From there the idea kick off to create not just snapback but infuse the passion and love I found in NFT and combine the two. Where fashion meets tech. So from Early August NFTsnapback was created.</p>
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

                                <h1 className="text-2xl font-extrabold pb-8 text-white">Genesis Launch</h1>
                                <p className="leading-loose text-whiteSmoke">There was 275 Genesis 0.G.C  KONGZ NFTsnapback that was created for the cyberkongz community and also Ladz City community. These NFT at the time was all airdropped using a Snapshot of cyberkongz holders at the time, through the smartcontract. As months went by we sourced the finest quality hats, production company and created the best premium quality NFTsnapback for the community. 
                                </p>
                            </div>
                        </main>
                    </section>

                    <aside className=" w-5 h-5 transform -rotate-45 bg-primaryGold relative top-24 left-3 shadow-def" />

                    <section>
                        <main className="bg-darkgray w-full mt-5 max-w-2xl rounded-lg">

                            <div className="ml-14 py-14 mr-9">
                                <h1 className="text-xl text-white font-bold">.03</h1>

                                <h1 className="text-2xl font-extrabold pb-8 text-white">Claim Success</h1>
                                <p className="leading-loose text-whiteSmoke">Finally the day came when the NFT holders were able to claim the Genesis Community created Cyberkong NFTsnapback. A great success where NFTsnapback distributed the 1st NFT the was back by a physical SNAPBACK. This proof of concept was amazing to see and this was the 1st of its kind, but many more to come. </p>
                            </div>
                        </main>
                    </section>

                    <aside className=" w-5 h-5 transform -rotate-45 bg-primaryGold relative top-24 left-3 shadow-def" />

                    <section>
                        <main className="bg-darkgray w-full mt-5 max-w-2xl rounded-lg">

                            <div className="ml-14 py-14 mr-9">
                                <h1 className="text-xl text-white font-bold">.04</h1>

                                <h1 className="text-2xl font-extrabold pb-8 text-white"> Next Launch</h1>
                                <p className="leading-loose text-whiteSmoke"> With the success of the the Genesis Community Cyberkongz NFTsnapback launch we have partnered up with 4 projects/Influencer’s in the NFT space. Rizzle Pre Co-founder of Avastars & NFT42, Cloudwhite Influencer in the NFT space and the Founder of $COKE Axie Infinity, Eric Founder of Unofficial Punks the man that stared the whole derivatives of the Cryptopunk movement and Florian Tappeser, a movie industry veteran who worked on many acclaimed animation hits like Hotel Transylvania and How To Train Your Dragon & has his on brand in Drippieverse™ and work with some of the biggest companies in the space such as Genies. NFTsnapback are proud to be working with some of the most incredible people and communities in this space.</p>
                            </div>
                        </main>
                    </section>

                    <aside className=" w-5 h-5 transform -rotate-45 bg-primaryGold relative top-24 left-3 shadow-def" />

                    <section>
                        <main className="bg-darkgray w-full mt-5 max-w-2xl rounded-lg">

                            <div className="ml-14 py-14 mr-9">
                                <h1 className="text-xl text-white font-bold">.05</h1>

                                <h1 className="text-2xl font-extrabold pb-8 text-white">NFT Snapback</h1>
                                <p className="leading-loose text-whiteSmoke">We are already working and completing the next steps for the community and the NFTsnapback that soon we will be announcing something exciting for the space. We have some much in development and we want to insure that once we do make an announcement that the community would be impressed in what we will have in store.
</p>
                            </div>
                        </main>
                    </section>
                </section>
            </section>
    )
}
