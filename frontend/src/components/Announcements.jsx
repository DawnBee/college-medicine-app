import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { API_BASE_URL } from '../api'
import axios from 'axios'

// Asset Imports
import sirenIcon from '../assets/images/siren.svg'

const Announcements = () => {
  const [sliderImages, setSliderImages] = useState([])
  const [currentSlide, setCurrentSlide] = useState(0)
  
  useEffect(() => {
    axios.get(`${API_BASE_URL}/home/announcements`)
    .then(res => {
      setSliderImages(res.data)
    })
    .catch(err => {
      console.error('Error fetching announcements', err)
    })
  }, [])
  
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
  }, [sliderImages])

return (
  <section className="announcement-section">
    <img className="siren-icon" src={sirenIcon} alt="siren icon" />
    <div className="carousel-container">
      {sliderImages.map((slide, index) => (
          <div
            key={slide.id}
            className={`carousel-slide ${currentSlide === index ? 'active' : ''}`}
            style={{transform: `translateX(-${currentSlide * 100}%)` }}
          >
            <Link to={`/announcements/${slide.id}`} className="item-title">                
              <img
                  className={`slide-${index + 1}`}
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
              />
            </Link>              
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

export default Announcements