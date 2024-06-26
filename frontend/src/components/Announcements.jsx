import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { API_BASE_URL } from '../api'
import axios from 'axios'

const NoSlideFound = styled.div`
  width: 100%;
  display: grid;
  min-height: 25em;
  place-items: center;
  background: #272727;
  border: 15px solid #9E2828;
  & div {
    gap: 1em;
    display: flex;
    align-items: center;
    & > i {
      color: #FFF800;
      font-size: 2.5rem;
    }
    & > p {
      color: #fff;
      font-size: 2rem;
      font-family: "Montserrat", sans-serif;
    }
  }
`;

// Asset Imports
import sirenIcon from '../assets/images/home/siren.svg'

const Announcements = () => {
  const [sliderImages, setSliderImages] = useState([])
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/home/announcements`, {
          params: { limit: 3}
        })
        setSliderImages(res.data)
      } catch (err) {
        console.error('Error fetching announcements:', err)
      }
    }
    fetchAnnouncements()
  },[])  
  
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
    {sliderImages.length > 0 ? (
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
    ) : (
      <NoSlideFound>
        <div className="container">
          <i className="fa-solid fa-triangle-exclamation"></i>
          <p>No 'Announcements' Found!</p>
        </div>
      </NoSlideFound>
    )}
  </section>
)}

export default Announcements