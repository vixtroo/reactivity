import TopNavbar from "@/components/top-navbar";
import TopNavbar2 from "@/components/top-navbar-2";
import Slider from "@/components/slider";
import Footer from "@/components/pup-home-footer";
import Footer2 from "@/components/pup-home-footer2";
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useState } from 'react';

const Home = () => {

    const announcements = [
        {title: 'Administrative Applicants for Selection/Promotion: List of All Applicants (First and Second Level) April 2023',
        date: 'April 20, 2023',
        link: '#'},
        {title: 'Advisory on the Submission of Online Application for Graduation and Other Scheduled Activities for Year-End Graduation (Second Semester) A.Y. 2022-2023',
        date: 'April 10, 2023',
        link: '#'},
        {title: 'PUP ICT Office is looking for Computer Programmers (J.O.)',
        date: 'March 02, 2023',
        link: '#'},
        {title: 'List of Qualified Applicants for Promotion (First and Second Level Positions) Batches 1, 2, and 3',
        date: 'February 07, 2023',
        link: '#'},
        {title: 'List of Eligible Applicants for Promotion (First and Second Level Positions)',
        date: 'February 01, 2023',
        link: '#'},
        {title: 'Advisory to All Graduates of the PUP Main Campus (Sta. Mesa, Manila)',
        date: 'September 16, 2022',
        link: '#'},
        {title: 'Internal Guidelines for Opt-Out and Voluntary Contribution of Students under Republic Act 10931',
        date: 'April 04, 2022',
        link: '#'},
    ]
    const images = [
        {src: '/img1.jpg'},
        {src: '/img2.jpg'},
        {src: '/img3.jpg'},
        {src: '/img4.jpg'},
        {src: '/img5.jpg'},
    ]
    const pupNews = [
        {src: '/news1.jpg',
        title: 'PHIVOLCS commits to training PUP on REDAS',
        link: '#',
        date: 'April 26, 2023'},
        {src: '/news2.jpg',
        title: 'Earth Day 2023 celebrated through the arts',
        link: '#',
        date: 'April 26, 2023'},
        {src: '/news3.jpg',
        title: 'DBM Sec. Pangandaman and DepEd Usec Jumamil-Mercado receives Tanglaw ng Bayan Award',
        link: '',
        date: 'April 25, 2023'},
    ]
    const iconLinks = [
        {title: 'Apply Now', d:'M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10', link:'#'},
        {title: 'Attend an Event', d:'M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z', link:'#'},
        {title: 'PUP and Sustainability Development Programs', d:'M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9', link:'#', margin:'mt-6'},
        {title: 'Campus Life', d:'M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z', link:'#'},
    ]
    const [slideIndex, setSlideIndex] = useState(0);

    return (
        <div className="flex flex-col flex-wrap justify-center">
            <TopNavbar />
            <TopNavbar2/>
            <Slider/>

            <div className="flex flex-wrap content-center justify-center border-b-[1px] border-grey h-52 other-links-container">
                {iconLinks.map((iconLink, index)=>(
                <a href={iconLink.link} className="other-links" key={index}>
                    <div className={`icon-container ${iconLink.margin}`}>
                        <div className="icon-border">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d={iconLink.d} />
                            </svg>
                        </div>
                    </div>
                    <p>{iconLink.title}</p> 
                </a>
                ))}
            </div>

            <div className="flex flex-wrap content-center justify-center h-auto mt-14">
                <div className="flex flex-wrap w-3/4 h-auto content-container-container">
                    <div className="w-2/5 content-container">
                        <div className="title">
                            <h1 className="mb-2 font-bold text-red-800">Announcements and Advisories</h1>
                        </div>
                        <div className="flex flex-wrap overflow-auto overflow-x-hidden content">
                            {announcements.map((announcement, index) =>(
                                <div key="" className="announcements">
                                    <a href={announcement.link}>{announcement.title}</a>
                                    <p>Posted: {announcement.date}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-2/5 content-container">
                        <div className="title">
                            <h1 className="mb-2 font-bold text-red-800">Latest News from the University</h1>
                            <div className="slider-buttons"></div>
                        </div>
                        <div>
                        <Carousel showThumbs={false} showStatus={false} infiniteLoop={true} selectedItem={slideIndex} onChange={(index) => setSlideIndex(index)} showIndicators={false}>
                            {pupNews.map((news, index) => (
                                <div key="" className="flex flex-col flex-wrap justify-start">
                                    <div key={index}>
                                        <img src={news.src} alt={`Image ${index}`} className="news-img"/>
                                    </div>
                                    <div className="flex flex-col flex-wrap hover:underline">
                                        <a href={news.link} className="font-semibold">{news.title}</a>
                                        <p>{news.date}</p>
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                        </div>
                    </div>
                    <div className="flex flex-col flex-wrap items-center justify-center w-1/5 content-container">
                        {images.map((image, index) =>(
                            <div key=""  className="img-container">
                                <a href="#"><Image src={image.src} alt="" width={200} height={150}/></a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap justify-center mt-10 border-b-[1px] border-grey">
                <div className="flex justify-center w-3/4 h-auto embed">
                    <div className="mr-5 ">
                        <a class="twitter-timeline" data-width="350" data-height="885" data-theme="dark" href="https://twitter.com/papicurl?ref_src=twsrc%5Etfw">Tweets by papicurl</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                    </div>
                    <div className="ml-5 2/3">
                        <div className="mb-6">
                            <iframe width="750" height="500" src="https://www.youtube.com/embed/oM6-umUNH-4" title="[오늘의 지수] EP.3 M/V BEHIND" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <div className="mb-2">
                            <iframe width="750" height="360"  src="https://open.spotify.com/embed/playlist/0whUCQp9szryvQjXBuNqFb?utm_source=generator" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
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