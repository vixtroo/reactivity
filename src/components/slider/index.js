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
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 2,
        backgroundColor: '#555',
        opacity: isHovered ? 0.5 : 0,
        borderRadius: 0,
        width: '100px',
        height: '100px',
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
        fontSize: '1.5em',
        transition: 'opacity 0.3s ease',
      };
      const handlePrevClick = () => {
        setSlideIndex((slideIndex - 1 + images.length) % images.length);
      };
    
      const handleNextClick = () => {
        setSlideIndex((slideIndex + 1) % images.length);
      };

      return (
        <div className='slider' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} style={{ position: 'relative' }}>
            <Carousel showThumbs={false} showStatus={false} infiniteLoop={true} selectedItem={slideIndex} onChange={(index) => setSlideIndex(index)} showArrows={false}>
                {images.map((image, index) => (
                    <div key={index}>
                        <img src={image.src} alt={`Image ${index}`} />
                    </div>
                ))}
            </Carousel>
            <button onClick={handlePrevClick} style={{ ...arrowStyles, left: 0 }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>
            <button onClick={handleNextClick} style={{ ...arrowStyles, right: 0 }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>
        </div>
      );
      
}

export default Slider