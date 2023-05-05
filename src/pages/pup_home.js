import TopNavbar from "@components/top-navbar";
import TopNavbar2 from "@components/top-navbar-2";
import Slider from "@components/slider";
import Footer from "@components/pup-home-footer";
import Footer2 from "@components/pup-home-footer2";
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useState } from 'react';
import { announcements, iconLinks, pupNews, images } from "@helpers/main_data";
import Modal from "@components/modal";

const Home = () => {

    const [slideIndex, setSlideIndex] = useState(0);

    const handlePrevClick = () => {
        setSlideIndex((slideIndex - 1 + pupNews.length) % pupNews.length);
    };
    
    const handleNextClick = () => {
        setSlideIndex((slideIndex + 1) % pupNews.length);
    };

    return (
        <div className="flex flex-col flex-wrap justify-center">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <TopNavbar />
            <TopNavbar2/>
            <Slider/>
            <div className="flex flex-wrap content-center justify-center border-b-[1px] border-grey h-52 other-links-container">
                {iconLinks.map((iconLink, index)=>(
                <a href={iconLink.link} className="other-links" key={index}>
                    <div className={`icon-container ${iconLink.margin}`}>
                        <div className="text-3xl icon-border">
                            <i className={`fa ${iconLink.d}`}></i>
                        </div>
                    </div>
                    <p>{iconLink.title}</p> 
                </a>
                ))}
            </div>
            <div className="flex flex-wrap content-center justify-center h-auto mt-14 ">
                <div className="flex flex-wrap w-3/4 h-auto content-container-container">
                    <div className="w-full content-container md:w-2/5">
                        <div className="mb-4 title">
                            <h1 className="mb-2 font-bold text-red-800">Announcements and Advisories</h1>
                        </div>
                        <div className="flex flex-wrap overflow-auto overflow-x-hidden content">
                            {announcements.map((announcement, index) =>(
                                <div key={index} className="announcements">
                                    <a href={announcement.link}>{announcement.title}</a>
                                    <p>Posted: {announcement.date}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-full content-container md:w-2/5 md:h-96 news-slider">
                        <div className="title">
                            <h1 className="mb-2 font-bold text-red-800">Latest News from the University</h1>
                            <div className="slider-buttons-container">
                                <button onClick={handlePrevClick} className="news-slider-btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="w-3 h-3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                    </svg>
                                </button>
                                <button onClick={handleNextClick} className="news-slider-btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="w-3 h-3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="pt-5 pr-5 ehe">
                            <Carousel showThumbs={false} showStatus={false} infiniteLoop={true} selectedItem={slideIndex} onChange={(index) => setSlideIndex(index)} showIndicators={false} showArrows={false} autoPlay className="news-slider">
                                {pupNews.map((news, index) => (
                                    <div key={index} className="flex flex-col flex-wrap">
                                        <div>
                                            <img src={news.src} alt={`Image ${index}`} className="news-img"/>
                                        </div>
                                        <div className="flex flex-col pt-5 pl-2 hover:underline">
                                            <a href={news.link} className="h-auto font-semibold text-left">{news.title}</a>
                                            <p className="text-left">{news.date}</p>
                                        </div>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </div>
                    <div className="flex flex-col flex-wrap content-center justify-center w-full content-container md:w-1/5">
                        {images.map((image, index) =>(
                            <a href="#"  key={index}  className="flex flex-wrap justify-center mb-2 img-container">
                                <Image src={image.src} alt="" width={200} height={150}/>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap justify-center mt-10 border-b-[1px] border-grey">
                <div className="flex flex-col justify-center w-3/4 h-auto embed md:flex-row">
                    <div className="mr-0 md:mr-5 twitter">
                        <a className="twitter-timeline" data-theme="dark" href="https://twitter.com/papicurl?ref_src=twsrc%5Etfw">Tweets by papicurl</a> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
                    </div>
                    <div className="justify-center w-full ml-5 md:w-auto">
                        <div className="mb-6 yt-spot-container">
                            <iframe className="yt" src="https://www.youtube.com/embed/oM6-umUNH-4" title="[오늘의 지수] EP.3 M/V BEHIND" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                        <div className="mb-2 yt-spot-container">
                            <iframe className="spotify"  src="https://open.spotify.com/embed/playlist/0whUCQp9szryvQjXBuNqFb?utm_source=generator" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <Modal/>
            <Footer/>
            <Footer2/>
        </div>
    )
}

export default Home