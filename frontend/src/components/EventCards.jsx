import 'react-multi-carousel/lib/styles.css'
import { useState, useEffect } from 'react'
import Carousel from 'react-multi-carousel'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { API_BASE_URL } from '../api'
import axios from 'axios'

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4
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

const NoEventsFound = styled.div`
  width: 100%;
  display: grid;
  min-height: 20em;
  place-items: center;
  & > p {
    font-size: 2rem;
    font-family: "Montserrat", sans-serif;
  }
`;

const EventCards = () => {
    const [events, setEvents] = useState([])

    useEffect(() => {
      const fetchEvents = async () => {
        try {
          const res = await axios.get(`${API_BASE_URL}/home/events`, {
            params: { limit: 5}
          })
          setEvents(res.data)
        } catch (err) {
          console.error('Error fetching events:', err)
        }
      }
      fetchEvents()
    },[])
  
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
          {events.length > 0 ? (
            <Carousel 
              responsive={responsive}
              containerClass="card-container"
              customLeftArrow={<CustomLeftArrow />}
              customRightArrow={<CustomRightArrow />}
            >
              {events.map((event) => {
                let truncatedTitle = event.title.length > 20 ? `${event.title.substring(0, 20)} ...` : event.title;
                let truncatedDescription = event.description.length > 90 ? `${event.description.substring(0, 90)} ...` : event.description;

                return (
                  <div key={event.id} className="event-card">
                    <div className="image-box">
                      <Link to={`/events/${event.id}`}>
                        <img className="event-img" src={event.image} alt="event image" />
                      </Link>  
                    </div>
                    <div className="content">
                      <h3 className="card-title">{truncatedTitle}</h3>
                      <p>{truncatedDescription}</p>
                    </div>
                  </div>
                );
              })}
            </Carousel>
          ) : (
            <NoEventsFound>
              <p>No 'Events' Found!</p>
            </ NoEventsFound>
          )}        
        </div>
      </section>
    )      
  }
  
export default EventCards