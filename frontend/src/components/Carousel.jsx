import { useState, useEffect } from 'react'

// Asset Imports
import sirenIcon from '../assets/images/siren.svg'
import slideImageOne from '../assets/images/blood-donation.png'
import slideImageTwo from '../assets/images/medical-consult.png'
import slideImageThree from '../assets/images/dentistry.png'

const sliderImages = [slideImageOne, slideImageTwo, slideImageThree]


const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = sliderImages.length

  // Function to handle advancing to the next slide
  const nextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides)
  }

  useEffect(() => {
      // Setup timer to advance to the next slide every 3 seconds
      const interval = setInterval(nextSlide, 3000)

      // Clear interval when the component unmounts
      return () => clearInterval(interval)
  }, [])

return (
  <section className="announcement-section">
    <img className="siren-icon" src={sirenIcon} alt="siren icon" />
    <div className="carousel-container">
      {sliderImages.map((slide, index) => (
        <div
          key={index}
          className={`carousel-slide ${currentSlide === index ? 'active' : ''}`}
          style={{transform: `translateX(-${currentSlide * 100}%)` }}
        >
          <img
              className={`slide-${index + 1}`}
              src={slide}
              alt={`Slide ${index + 1}`}
          />
        </div>
      ))}
      <div className="carousel-navigation">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            className={`carousel-nav-btn ${currentSlide === index ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  </section>
)
}

export default Carousel