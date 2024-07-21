import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { API_BASE_URL } from '../api'
import axios from 'axios'

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 920 },
      items: 1
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
  
const OfficerCards = () => {
    const [officers, setOfficers] = useState([])

    useEffect(() => {
        const fetchOfficers = async () => {
            try {
                const res = await axios.get(`${API_BASE_URL}/others/officers`, {
                    params : {limit : 3}
                })
                setOfficers(res.data)
            } catch (err) {
                console.error('Error fetching officers:', err)
            }
        }
        fetchOfficers()
    }, [])

    // Slider Arrows
    const CustomLeftArrow = ({ onClick }) => (
        <i id="prev" className="slider-btn fa-solid fa-chevron-left" onClick={onClick}></i>
    )
    const CustomRightArrow = ({ onClick }) => (
        <i id="next" className="slider-btn fa-solid fa-chevron-right" onClick={onClick}></i>
    )
    
  return (
    <section className="officer-info-section">
        <Carousel        
            responsive={responsive}
            containerClass="card-container"
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
        >
            {officers.map((officer) => (
                <div key={officer.id} className="officer-card">
                    <div className="container">
                        <div className="header">
                            <Link to={`/officers/${officer.id}`}>
                                <h2>SOMED</h2>
                                <em>{officer.position}</em>
                            </Link>
                        </div>
                        <div className="image-frame">
                            <img src={officer.image} alt="officer image" />
                        </div>
                        <div className="info-group">
                            <ul className="info-list">
                                <li className="info-item">
                                    <strong>Name:</strong>
                                    <p>{officer.name}</p>
                                </li>
                                <li className="info-item">
                                    <strong>Position:</strong>
                                    <p>{officer.position}</p>
                                </li>                                
                            </ul>
                        </div>                            
                    </div>
                </div>       
            ))}
        </Carousel>
    </section>
  )
}

export default OfficerCards
