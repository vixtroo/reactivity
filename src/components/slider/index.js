import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useState } from 'react';

const Slider = () =>{
    
    const images = [
        { src: 'https://i.imgur.com/Shm8d5a.jpg' },
        { src: 'https://i.imgur.com/KtfenQC.jpg' },
        { src: 'https://i.imgur.com/LysW4od.jpg' },
        { src: 'https://i.imgur.com/h7C66lI.jpg' },
        { src: 'https://i.imgur.com/GC0dTGx.jpg' },
        { src: 'https://i.imgur.com/e8kj4pH.jpg' },
        { src: 'https://i.imgur.com/vE1uxZe.jpg' },
        { src: 'https://i.imgur.com/ROfBqoJ.jpg' },
      ];
      
      const [isHovered, setIsHovered] = useState(false);
      const [slideIndex, setSlideIndex] = useState(0);

      const arrowStyles = {
        opacity: isHovered ? 0.5 : 0,
      };
      const handlePrevClick = () => {
        setSlideIndex((slideIndex - 1 + images.length) % images.length);
      };
    
      const handleNextClick = () => {
        setSlideIndex((slideIndex + 1) % images.length);
      };

      const customIndicator = (onClickHandler, isSelected, index, label) => {
        const indicatorSize = 20;
        const style = {
          width: `${indicatorSize}px`,
          height: `${indicatorSize}px`,
          margin: "0 5px",
          cursor: "pointer",
          borderRadius: "50%",
          backgroundColor: isSelected ? "#fff" : "#555",
          transition: 'opacity 0.5s ease',
          opacity: isHovered ? .7 : 0,
        };
        return (
          <li
            className={`${isSelected ? "selected" : ""} inline-block pb-5`}
            style={style}
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            role="button"
            tabIndex="0"
            aria-label={`${label} ${index + 1}`}
          />
        );
      };

      return (
        <div className="main-slider" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <div className="carousel-slider-container">
              <Carousel showThumbs={false} showStatus={false} infiniteLoop={true} selectedItem={slideIndex} onChange={(index) => setSlideIndex(index)} showArrows={false} renderIndicator={customIndicator} autoPlay swipeable={true} emulateTouch={true}>
                  {images.map((image, index) => (
                      <div key={index}>
                          <img src={image.src} alt={`Image ${index}`} />
                      </div>
                  ))}
              </Carousel>
            </div>
            <button onClick={handlePrevClick} style={{ ...arrowStyles, left: 0 }} className='arrowStyles'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>
            <button onClick={handleNextClick} style={{ ...arrowStyles, right: 0  }} className='arrowStyles'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>
        </div>
      );
      
}

export default Slider