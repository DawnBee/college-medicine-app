import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import api from '../api'

// Asset Imports
import eventImageOne from '../assets/images/event-1.jpg'
import eventImageTwo from '../assets/images/event-2.jfif'
import eventImageThree from '../assets/images/event-3.jpg'
import eventImageFour from '../assets/images/event-4.jpeg'

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 920 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 919, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
}

const EventCards = () => {
    const events = [
        {
            title: "Spring Break",
            image: eventImageOne,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, fugit."
        },
        {
            title: "Intramurals",
            image: eventImageTwo,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, fugit."
        },
        {
            title: "Entrance Exam",
            image: eventImageThree,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis illum perferendis sed laudantium nemo libero, sunt tempora quisquam placeat quis vero quia soluta accusantium obcaecati. Fugiat magnam unde qui eaque esse facere modi! Doloremque, corrupti."
        },
        {
            title: "Aquintance Party",
            image: eventImageFour,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, fugit."
        },
        {
            title: "Chirstmas Party",
            image: eventImageOne,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, fugit."
        },
        {
            title: "Awarding Ceremony",
            image: eventImageTwo,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, fugit."
        },       
        {
            title: "Community Outreach Program",
            image: eventImageThree,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, fugit."
        },
        {
            title: "Night Gala",
            image: eventImageFour,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, fugit."
        },
        {
            title: "Halloween Party",
            image: eventImageOne,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, fugit."
        },                            
    ]

    // const [events, setEvents] = useState([])
    // const [loading, setLoading] = useState(true)

    // useEffect(() => {
    //   const fetchEvents = async () => {
    //     try {
    //       const response = await api.get('/events')
    //       setEvents(response.data)
    //       setLoading(false)
    //     } catch (error) {
    //       console.error('Error fetching events:', error)
    //       setLoading(false)
    //     }
    //   }
    //   fetchEvents()
    // }, [])

    // if (loading) {
    //   return <p>Loading...</p>
    // }

    const CustomLeftArrow = ({ onClick }) => (
      <i id="prev" className="slider-btn fa-solid fa-chevron-left" onClick={onClick}></i>
    )
    
    const CustomRightArrow = ({ onClick }) => (
      <i id="next" className="slider-btn fa-solid fa-chevron-right" onClick={onClick}></i>
    )

    return (
      <section className="event-section">
        <div className="layout-container">
          <h2 className="event-header">Recent Events</h2>
            <Carousel 
              responsive={responsive}
              containerClass="card-container"
              customLeftArrow={<CustomLeftArrow />}
              customRightArrow={<CustomRightArrow />}
            >
              {events.map((event, index) => {
                let truncatedTitle = event.title.length > 20 ? `${event.title.substring(0, 20)} ...` : event.title
                let truncatedDescription = event.description.length > 90 ? `${event.description.substring(0, 90)} ...` : event.description

                return (
                  <div key={index} className="event-card">
                    <div className="image-box">
                      <img className="event-img" src={event.image} alt="event image" />
                    </div>
                    <div className="content">
                      <h3 className="card-title">{truncatedTitle}</h3>
                      <p>{truncatedDescription}</p>
                    </div>
                  </div>
                )
              })}
            </Carousel>
        </div>
      </section>
    )
  }

  export default EventCards