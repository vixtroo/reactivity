import TopNavbar from "@components/top-navbar";
import TopNavbar2 from "@components/top-navbar-2";
import Footer from "@components/pup-home-footer";
import Footer2 from "@components/pup-home-footer2";
import FloatingButtons from "@components/fab/fab";
import Link from "next/link";
import Modal from "@components/modal";
import { Paragraphs, ContentLinks, Services } from "@helpers/international_data";
import Image from "next/image";
import React from 'react';
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useState } from "react";
import axios from "axios";


const International = ({articlesData}) => {

    const [slideIndex, setSlideIndex] = useState(0);

    const handlePrevClick = () => {
        setSlideIndex((slideIndex - 1 + articlesData.length) % articlesData.length);
    };
    
    const handleNextClick = () => {
        setSlideIndex((slideIndex + 1) % articlesData.length);
    };

    const convertTimestamp = (timestamp) => {
        const dateObject = new Date(timestamp);
        const formattedDate = new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }).format(dateObject);
    
        return formattedDate;
      };

    return (
        <div className="flex flex-col flex-wrap justify-center">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <div className="navbar-container">
                <TopNavbar />
                <TopNavbar2/>
            </div>
            <FloatingButtons/>
            <div className="flex flex-wrap justify-center bg-white contact-us-content-container-container py-14">
                <div className="flex flex-col flex-wrap justify-center contact-us-content-container md:flex-row">
                    <div className="w-auto px-4 left-col md:w-3/4">
                        <h1 className="font-semibold">International Affairs</h1>
                        <div className="w-full international-img-container">
                            <Image src="/international.jpg" alt="" width={800} height={300}/>
                        </div>
                        {Paragraphs.map((paragraph, index)=>(
                            <p key={index} className="font-normal leading-relaxed mb-14 md:mb-8 md:leading-8">{paragraph.p}</p>
                        ))} 
                        <ul className="pl-8 text-lg leading-8 list-disc services-list md:pl-4">
                            {Services.map((service, index)=>(
                                <li key={index}>{service.listItem}</li>
                            ))}
                        </ul>
                        <div>
                            <div className="articles-title">
                                <h2 className="pb-2 text-base">Articles</h2>
                                <div className="slider-buttons-container">
                                    <button className="news-slider-btn" onClick={handlePrevClick}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="w-3 h-3">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                        </svg>
                                    </button>
                                    <button className="news-slider-btn" onClick={handleNextClick}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="w-3 h-3">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div>
                                <Carousel showArrows={false} showStatus={false} showIndicators={false} showThumbs={false} infiniteLoop={true} centerMode={true} centerSlidePercentage={33.33333} autoPlay selectedItem={slideIndex} onChange={(index) => setSlideIndex(index)}>
                                    {articlesData.map((articles, index)=>(
                                            <div key={index} className="flex flex-col flex-wrap">
                                            <div className="article-img">
                                                <img src={articles.main_article_photo} alt={`Image ${index}`} className="w-64 pr-4 h-72 md:h-52"/>
                                            </div>
                                            <div className="flex flex-col pt-10 pl-2 md:pt-5 hover:underline international-text">
                                                <a href={`/dynamic/${articles.id}`} target="blank" className="h-auto text-4xl font-semibold text-left text-red-800 md:text-lg">{articles.title}
                                                <span className="mt-1 text-3xl font-normal text-left md:text-base" style={{color: '#666666'}}><br/>{convertTimestamp(articles.created_at)}</span></a>
                                            </div>
                                        </div>  
                                    ))}
                                </Carousel>
                            </div>
                        </div>
                    </div>
                    <div className="w-auto h-auto px-4 mt-10 md:w-1/4 right-col md:h-10 md:mt-0">
                        <h1>Contents</h1>
                        {ContentLinks.map((contentLink, index)=>(
                            <ul key={index}>
                                <li><Link href="#" className="content-link">{contentLink.link}</Link></li>
                            </ul>
                        ))}
                    </div>
                </div>
            </div>
            
            <Modal/>
            <Footer/>
            <Footer2/>
        </div>
    )
}

export async function getStaticProps() {
    let data = []
    await axios.get('https://api.ahglab.com/api:W7k9W8HQ/articles').then(function (response) {
      data = response.data
    })
  
    return {
      props: {
        articlesData: data,
      },
      revalidate: 60,
    }
  }


export default International