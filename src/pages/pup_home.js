import TopNavbar from "@/components/top-navbar";
import TopNavbar2 from "@/components/top-navbar-2";
import Slider from "@/components/slider";
import Footer from "@/components/pup-home-footer";
import Footer2 from "@/components/pup-home-footer2";

const Home = () => {
    return (
        
        <div className="flex flex-col flex-wrap justify-center">
            <TopNavbar />
            <TopNavbar2/>
            <Slider/>
            
            <div className="flex flex-wrap content-center justify-center border-b-[1px] border-grey h-52 other-links-container">
                <a href="" className="other-links">
                    <div className="icon-container">
                        <div className="icon-border">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                            </svg>
                        </div>
                    </div>
                    <p>Apply Now</p>
                </a>
                <a href="" className="other-links">
                    <div className="icon-container">
                        <div className="icon-border">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                            </svg>
                        </div>
                    </div>
                    <p>Attend an Event</p>
                </a>
                <a href="" className="other-links">
                    <div className="mt-6 icon-container">
                        <div className="icon-border">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                            </svg>
                        </div>
                    </div>
                    <p>PUP and Sustainability Development Programs</p>
                </a>
                <a href="" className="other-links">
                    <div className="icon-container">
                        <div className="icon-border">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                            </svg>
                        </div>
                    </div>
                    <p>Campus Life</p>
                </a>
            </div>
            <div className="flex flex-wrap justify-center mt-10 border-b-[1px] border-grey">
                <div className="flex justify-center w-3/4 h-auto">
                    <div className="mr-5">
                        <a class="twitter-timeline" data-width="350" data-height="885" data-theme="dark" href="https://twitter.com/papicurl?ref_src=twsrc%5Etfw">Tweets by papicurl</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                    </div>
                    <div className="ml-5">
                        <div className="mb-6">
                            <iframe width="650" height="500" src="https://www.youtube.com/embed/oM6-umUNH-4" title="[오늘의 지수] EP.3 M/V BEHIND" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <div className="mb-2">
                            <iframe width="650" height="360"  src="https://open.spotify.com/embed/playlist/0whUCQp9szryvQjXBuNqFb?utm_source=generator" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
            <Footer2/>
        </div>
    )
}

export default Home